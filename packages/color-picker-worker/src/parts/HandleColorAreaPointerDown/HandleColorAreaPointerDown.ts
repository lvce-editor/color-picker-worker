import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as SetColorAreaPosition from '../SetColorAreaPosition/SetColorAreaPosition.ts'

export const handleColorAreaPointerDown = (state: ColorPickerState, eventX: number, eventY: number): ColorPickerState => {
  const newState = SetColorAreaPosition.setColorAreaPosition(state, eventX, eventY)
  return {
    ...newState,
    isColorAreaPointerDown: true,
  }
}
