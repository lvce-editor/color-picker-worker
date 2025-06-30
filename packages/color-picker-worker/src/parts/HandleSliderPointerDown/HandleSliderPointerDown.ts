import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as SetRelativeX from '../SetRelativeX/SetRelativeX.ts'

export const handleSliderPointerDown = (state: ColorPickerState, eventX: number, eventY: number): ColorPickerState => {
  return SetRelativeX.setRelativeX(state, eventX)
}
