import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderUid = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  const { uid, parentUid } = newState
  return [RenderMethod.SetUid, uid, parentUid]
}
