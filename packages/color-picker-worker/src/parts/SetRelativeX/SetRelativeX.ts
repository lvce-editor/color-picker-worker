import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as Clamp from '../Clamp/Clamp.ts'
import * as GetNewColor from '../GetNewColor/GetNewColor.ts'

export const setRelativeX = (state: ColorPickerState, eventX: number): ColorPickerState => {
  const { min, max, x } = state
  const relativeX = eventX - x
  const newX = Clamp.clamp(relativeX, min, max)
  const newColor = GetNewColor.getNewColor(newX, max)
  return {
    ...state,
    color: newColor,
    offsetX: newX,
  }
}
