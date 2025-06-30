import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as Clamp from '../Clamp/Clamp.ts'
import { getNewColor } from '../GetNewColor/GetNewColor.ts'

export const handleSliderPointerDown = (state: ColorPickerState, eventX: number, eventY: number): ColorPickerState => {
  const { min, max, x } = state
  const relativeX = eventX - x
  const newX = Clamp.clamp(relativeX, min, max)
  const newColor = getNewColor(newX, max)
  return {
    ...state,
    color: newColor,
    offsetX: newX,
  }
}
