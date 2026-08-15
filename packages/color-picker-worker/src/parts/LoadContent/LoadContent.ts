import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as GetBounds from '../GetBounds/GetBounds.ts'
import * as GetNewColor from '../GetNewColor/GetNewColor.ts'
import * as GetSelectedColor from '../GetSelectedColor/GetSelectedColor.ts'
import * as ParseColor from '../ParseColor/ParseColor.ts'

export const loadContent = (state: ColorPickerState, value = ''): ColorPickerState => {
  const bottomHeight = 50
  const max = 300
  const initialOffsetX = 20
  const sliderThumbRadius = 12
  const parsedColor = ParseColor.parseColor(value)
  const hue = parsedColor?.hue ?? (initialOffsetX / max) * 360
  const sliderPosition = parsedColor ? (hue / 360) * max : initialOffsetX
  const color = GetNewColor.getNewColor(sliderPosition, max)
  const saturation = parsedColor?.saturation ?? 1
  const selectedColor = parsedColor?.selectedColor ?? GetSelectedColor.getSelectedColor(hue, saturation, 1)
  const colorValue = parsedColor?.value ?? 1
  const { height: initialHeight, width: initialWidth } = state
  const bounds = initialWidth > 0 && initialHeight > 0 ? state : GetBounds.getBounds()
  const { height, width, x, y } = bounds
  const colorAreaHeight = Math.max(0, height - bottomHeight)
  return {
    ...state,
    color,
    colorAreaHeight,
    colorAreaOffsetX: saturation * width,
    colorAreaOffsetY: (1 - colorValue) * colorAreaHeight,
    focused: true,
    height,
    hue,
    max,
    offsetX: parsedColor ? sliderPosition - sliderThumbRadius : initialOffsetX,
    saturation,
    selectedColor,
    sliderThumbRadius,
    value: colorValue,
    version: 1,
    width,
    x,
    y,
  }
}
