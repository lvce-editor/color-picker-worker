import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

interface ColorPickerCommand {
  (state: ColorPickerState, ...args: readonly any[]): ColorPickerState | Promise<ColorPickerState>
}

interface UpdateEditorColor {
  (editorUid: number, color: string): Promise<unknown>
}

const updateEditorColor = (editorUid: number, color: string): Promise<unknown> => {
  return EditorWorker.invoke('Editor.updateColorPickerValue', editorUid, color)
}

export const withEditorColorUpdate = (command: ColorPickerCommand, update: UpdateEditorColor = updateEditorColor): ColorPickerCommand => {
  return async (state: ColorPickerState, ...args: readonly any[]): Promise<ColorPickerState> => {
    const { parentUid, selectedColor } = state
    const newState = await command(state, ...args)
    if (newState.selectedColor !== selectedColor) {
      await update(parentUid, newState.selectedColor)
    }
    return newState
  }
}
