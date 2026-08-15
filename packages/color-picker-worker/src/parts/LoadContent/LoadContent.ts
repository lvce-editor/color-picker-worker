import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as GetBounds from '../GetBounds/GetBounds.ts'
import * as GetNewColor from '../GetNewColor/GetNewColor.ts'

export const loadContent = (state: ColorPickerState): ColorPickerState => {
  const bottomHeight = 50
  const max = 300
  const initialOffsetX = 20
  const sliderThumbRadius = 12
  const color = GetNewColor.getNewColor(initialOffsetX, max)
  const { height: initialHeight, width: initialWidth } = state
  const bounds = initialWidth > 0 && initialHeight > 0 ? state : GetBounds.getBounds()
  const { height, width, x, y } = bounds
  const colorAreaHeight = Math.max(0, height - bottomHeight)
  return {
    ...state,
    color,
    colorAreaHeight,
    colorAreaOffsetX: width,
    colorAreaOffsetY: 0,
    focused: true,
    height,
    max,
    offsetX: initialOffsetX,
    saturation: 1,
    sliderThumbRadius,
    value: 1,
    version: 1,
    width,
    x,
    y,
  }
}
