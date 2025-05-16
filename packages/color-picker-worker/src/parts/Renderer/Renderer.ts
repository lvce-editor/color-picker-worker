import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export interface Renderer {
  (oldState: ColorPickerState, newState: ColorPickerState): readonly any[]
}
