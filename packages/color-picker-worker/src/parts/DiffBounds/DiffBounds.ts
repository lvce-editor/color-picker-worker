import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const isEqual = (oldState: ColorPickerState, newState: ColorPickerState): boolean => {
  return oldState.x === newState.x && oldState.y === newState.y && oldState.width === newState.width && oldState.height === newState.height
}
