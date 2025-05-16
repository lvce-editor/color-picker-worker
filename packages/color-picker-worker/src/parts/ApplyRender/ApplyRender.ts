import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import type { SearchState } from '../SearchState/SearchState.ts'
import * as GetRenderer from '../GetRenderer/GetRenderer.ts'

export const applyRender = (oldState: ColorPickerState, newState: ColorPickerState, diffResult: readonly number[]): readonly any[] => {
  const commands = []
  for (const item of diffResult) {
    const fn = GetRenderer.getRenderer(item)
    commands.push(fn(oldState, newState))
  }
  return commands
}
