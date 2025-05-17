import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const renderOffsetX = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  const { offsetX, uid } = newState
  return ['setOffsetX', uid, offsetX]
}
