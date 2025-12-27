import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as GetBounds from '../GetBounds/GetBounds.ts'
import * as GetNewColor from '../GetNewColor/GetNewColor.ts'

export const loadContent = (state: ColorPickerState): ColorPickerState => {
  const max = 300
  const initialOffsetX = 20
  const sliderThumbRadius = 12
  const color = GetNewColor.getNewColor(initialOffsetX, max)
  const { height, width, x, y } = GetBounds.getBounds()
  return {
    ...state,
    color,
    height,
    max,
    offsetX: initialOffsetX,
    sliderThumbRadius,
    version: 1,
    width,
    x,
    y,
  }
}
