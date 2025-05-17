import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as Clamp from '../Clamp/Clamp.ts'
import { getNewColor } from '../GetNewColor/GetNewColor.ts'

export const handleSliderPointerMove = (state: ColorPickerState, x: number, y: number): ColorPickerState => {
  const { min, max } = state
  const newX = Clamp.clamp(x, min, max)
  const newColor = getNewColor(newX, max)
  return {
    ...state,
    color: newColor,
    offsetX: newX,
  }
}
