import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import { getBounds } from '../GetBounds/GetBounds.ts'
import { getNewColor } from '../GetNewColor/GetNewColor.ts'

export const loadContent = (state: ColorPickerState): ColorPickerState => {
  const max = 300
  const offsetX = 20
  const color = getNewColor(offsetX, max)
  const { x, y, width, height } = getBounds()
  return {
    ...state,
    offsetX: offsetX,
    color,
    max,
    x,
    y,
    width,
    height,
  }
}
