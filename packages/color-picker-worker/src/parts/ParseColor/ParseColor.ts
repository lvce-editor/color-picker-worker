import * as GetSelectedColor from '../GetSelectedColor/GetSelectedColor.ts'

export interface ParsedColor {
  readonly hue: number
  readonly saturation: number
  readonly selectedColor: string
  readonly value: number
}

interface RgbColor {
  readonly blue: number
  readonly green: number
  readonly red: number
}

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}

const parseNumber = (value: string): number | undefined => {
  const trimmed = value.trim()
  if (!trimmed || !/^[+.\-\deE]+$/.test(trimmed)) {
    return undefined
  }
  const parsed = Number(trimmed)
  return Number.isFinite(parsed) ? parsed : undefined
}

const parsePercentage = (value: string): number | undefined => {
  const trimmed = value.trim()
  if (!trimmed.endsWith('%')) {
    return undefined
  }
  const parsed = parseNumber(trimmed.slice(0, -1))
  return parsed === undefined ? undefined : clamp(parsed / 100, 0, 1)
}

const parseAlpha = (value: string | undefined): boolean => {
  if (value === undefined) {
    return true
  }
  const parse = value.trim().endsWith('%') ? parsePercentage : parseNumber
  return parse(value) !== undefined
}

const parseRgbChannel = (value: string): number | undefined => {
  const percentage = parsePercentage(value)
  if (percentage !== undefined) {
    return percentage
  }
  const parsed = parseNumber(value)
  return parsed === undefined ? undefined : clamp(parsed / 255, 0, 1)
}

const parseHue = (value: string): number | undefined => {
  const trimmed = value.trim().toLowerCase()
  const units = [
    ['grad', 0.9],
    ['turn', 360],
    ['rad', 180 / Math.PI],
    ['deg', 1],
  ] as const
  for (const [suffix, multiplier] of units) {
    if (trimmed.endsWith(suffix)) {
      const parsed = parseNumber(trimmed.slice(0, -suffix.length))
      return parsed === undefined ? undefined : parsed * multiplier
    }
  }
  return parseNumber(trimmed)
}

const splitFunctionArguments = (value: string): readonly string[] => {
  return value.replaceAll(',', ' ').replaceAll('/', ' / ').trim().split(/\s+/)
}

const parseHex = (value: string): RgbColor | undefined => {
  const match = /^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i.exec(value)
  if (!match) {
    return undefined
  }
  const hex = match[1]
  const expanded = hex.length <= 4 ? Array.from(hex, (character) => character + character).join('') : hex
  return {
    blue: Number.parseInt(expanded.slice(4, 6), 16) / 255,
    green: Number.parseInt(expanded.slice(2, 4), 16) / 255,
    red: Number.parseInt(expanded.slice(0, 2), 16) / 255,
  }
}

const parseRgb = (value: string): RgbColor | undefined => {
  const match = /^rgba?\((.*)\)$/i.exec(value)
  if (!match) {
    return undefined
  }
  const parts = splitFunctionArguments(match[1])
  const slashIndex = parts.indexOf('/')
  const channels = slashIndex === -1 ? parts.slice(0, 3) : parts.slice(0, slashIndex)
  const alpha = slashIndex === -1 ? parts[3] : parts[slashIndex + 1]
  if (channels.length !== 3 || parts.length > (slashIndex === -1 ? 4 : 5) || !parseAlpha(alpha)) {
    return undefined
  }
  const [red, green, blue] = channels.map(parseRgbChannel)
  if (red === undefined || green === undefined || blue === undefined) {
    return undefined
  }
  return { blue, green, red }
}

const hslToRgb = (hue: number, saturation: number, lightness: number): RgbColor => {
  const normalizedHue = ((hue % 360) + 360) % 360
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation
  const intermediate = chroma * (1 - Math.abs(((normalizedHue / 60) % 2) - 1))
  const offset = lightness - chroma / 2
  let red = 0
  let green = 0
  let blue = 0
  if (normalizedHue < 60) {
    red = chroma
    green = intermediate
  } else if (normalizedHue < 120) {
    red = intermediate
    green = chroma
  } else if (normalizedHue < 180) {
    green = chroma
    blue = intermediate
  } else if (normalizedHue < 240) {
    green = intermediate
    blue = chroma
  } else if (normalizedHue < 300) {
    red = intermediate
    blue = chroma
  } else {
    red = chroma
    blue = intermediate
  }
  return { blue: blue + offset, green: green + offset, red: red + offset }
}

const parseHsl = (value: string): RgbColor | undefined => {
  const match = /^hsla?\((.*)\)$/i.exec(value)
  if (!match) {
    return undefined
  }
  const parts = splitFunctionArguments(match[1])
  const slashIndex = parts.indexOf('/')
  const channels = slashIndex === -1 ? parts.slice(0, 3) : parts.slice(0, slashIndex)
  const alpha = slashIndex === -1 ? parts[3] : parts[slashIndex + 1]
  if (channels.length !== 3 || parts.length > (slashIndex === -1 ? 4 : 5) || !parseAlpha(alpha)) {
    return undefined
  }
  const hue = parseHue(channels[0])
  const saturation = parsePercentage(channels[1])
  const lightness = parsePercentage(channels[2])
  if (hue === undefined || saturation === undefined || lightness === undefined) {
    return undefined
  }
  return hslToRgb(hue, saturation, lightness)
}

const rgbToParsedColor = ({ blue, green, red }: RgbColor): ParsedColor => {
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const delta = max - min
  let hue = 0
  if (delta > 0) {
    if (max === red) {
      hue = 60 * (((green - blue) / delta) % 6)
    } else if (max === green) {
      hue = 60 * ((blue - red) / delta + 2)
    } else {
      hue = 60 * ((red - green) / delta + 4)
    }
  }
  hue = ((hue % 360) + 360) % 360
  const saturation = max === 0 ? 0 : delta / max
  return {
    hue,
    saturation,
    selectedColor: GetSelectedColor.getSelectedColor(hue, saturation, max),
    value: max,
  }
}

export const parseColor = (value: string): ParsedColor | undefined => {
  const trimmed = value.trim()
  const rgb = parseHex(trimmed) || parseRgb(trimmed) || parseHsl(trimmed)
  return rgb ? rgbToParsedColor(rgb) : undefined
}
