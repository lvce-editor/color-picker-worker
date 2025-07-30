import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as SetRelativeX from '../SetRelativeX/SetRelativeX.ts'

export const handleSliderPointerMove = (state: ColorPickerState, eventX: number, eventY: number): ColorPickerState => {
  const { isPointerDown } = state
  if (!isPointerDown) {
    return state
  }
  return SetRelativeX.setRelativeX(state, eventX)
}
