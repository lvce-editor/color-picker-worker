import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as SetRelativeX from '../SetRelativeX/SetRelativeX.ts'

export const handleSliderPointerDown = (state: ColorPickerState, eventX: number, eventY: number): ColorPickerState => {
  const newState = SetRelativeX.setRelativeX(state, eventX)
  return {
    ...newState,
    isPointerDown: true,
  }
}
