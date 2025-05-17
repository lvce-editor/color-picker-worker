import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const renderBounds = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  const { x, y, width, height, uid } = newState
  return ['setBounds', uid, x, y, width, height]
}
