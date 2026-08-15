const toHex = (value: number): string => {
  return Math.round(value * 255)
    .toString(16)
    .padStart(2, '0')
}

export const getSelectedColor = (hue: number, saturation: number, value: number): string => {
  const normalizedHue = ((hue % 360) + 360) % 360
  const chroma = value * saturation
  const intermediate = chroma * (1 - Math.abs(((normalizedHue / 60) % 2) - 1))
  const offset = value - chroma
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
  return `#${toHex(red + offset)}${toHex(green + offset)}${toHex(blue + offset)}`
}
