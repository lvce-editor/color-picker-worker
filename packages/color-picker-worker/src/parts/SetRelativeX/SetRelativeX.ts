import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as Clamp from '../Clamp/Clamp.ts'
import * as GetNewColor from '../GetNewColor/GetNewColor.ts'
import * as GetSelectedColor from '../GetSelectedColor/GetSelectedColor.ts'

export const setRelativeX = (state: ColorPickerState, eventX: number): ColorPickerState => {
  const { max, min, saturation, sliderThumbRadius, value, x } = state
  const relativeX = eventX - x
  const newX = Clamp.clamp(relativeX, min, max)
  const newColor = GetNewColor.getNewColor(newX, max)
  const hue = max === 0 ? 0 : (newX / max) * 360
  const selectedColor = GetSelectedColor.getSelectedColor(hue, saturation, value)
  const adjusted = newX - sliderThumbRadius
  return {
    ...state,
    color: newColor,
    hue,
    offsetX: adjusted,
    selectedColor,
  }
}
