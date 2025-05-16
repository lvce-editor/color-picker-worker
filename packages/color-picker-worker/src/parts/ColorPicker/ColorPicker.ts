import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import { getNewColor } from '../GetNewColor/GetNewColor.ts'

export const loadContent = (state: ColorPickerState): ColorPickerState => {
  const max = 300
  const x = 20
  const color = getNewColor(x, max)
  return {
    ...state,
    offsetX: x,
    color,
    max,
  }
}
