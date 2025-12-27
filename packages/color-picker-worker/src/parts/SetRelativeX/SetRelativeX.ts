import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as Clamp from '../Clamp/Clamp.ts'
import * as GetNewColor from '../GetNewColor/GetNewColor.ts'

export const setRelativeX = (state: ColorPickerState, eventX: number): ColorPickerState => {
  const { max, min, sliderThumbRadius, x } = state
  const relativeX = eventX - x
  const newX = Clamp.clamp(relativeX, min, max)
  const newColor = GetNewColor.getNewColor(newX, max)
  const adjusted = newX - sliderThumbRadius
  return {
    ...state,
    color: newColor,
    offsetX: adjusted,
  }
}
