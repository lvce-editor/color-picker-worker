import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const handleColorAreaPointerUp = (state: ColorPickerState): ColorPickerState => {
  return {
    ...state,
    isColorAreaPointerDown: false,
  }
}
