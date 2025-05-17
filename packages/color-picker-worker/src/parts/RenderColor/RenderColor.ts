import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const renderColor = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  const { color, uid } = newState
  return ['setColor', uid, color]
}
