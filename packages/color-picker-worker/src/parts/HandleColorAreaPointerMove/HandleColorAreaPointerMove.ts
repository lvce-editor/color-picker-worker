import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as SetColorAreaPosition from '../SetColorAreaPosition/SetColorAreaPosition.ts'

export const handleColorAreaPointerMove = (state: ColorPickerState, eventX: number, eventY: number): ColorPickerState => {
  const { isColorAreaPointerDown } = state
  if (!isColorAreaPointerDown) {
    return state
  }
  return SetColorAreaPosition.setColorAreaPosition(state, eventX, eventY)
}
