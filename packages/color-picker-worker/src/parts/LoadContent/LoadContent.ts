import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as GetBounds from '../GetBounds/GetBounds.ts'
import * as GetNewColor from '../GetNewColor/GetNewColor.ts'

export const loadContent = (state: ColorPickerState): ColorPickerState => {
  const max = 300
  const offsetX = 20
  const color = GetNewColor.getNewColor(offsetX, max)
  const { x, y, width, height } = GetBounds.getBounds()
  return {
    ...state,
    offsetX: offsetX,
    color,
    max,
    x,
    y,
    width,
    height,
    version: 1,
  }
}
