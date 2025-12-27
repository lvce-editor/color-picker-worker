import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderBounds = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  const { height, uid, width, x, y } = newState
  return [RenderMethod.SetBounds, uid, x, y, width, height]
}
