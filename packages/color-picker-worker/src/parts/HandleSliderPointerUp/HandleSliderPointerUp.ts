import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const handleSliderPointerUp = (state: ColorPickerState): ColorPickerState => {
  return {
    ...state,
    isPointerDown: false,
  }
}
