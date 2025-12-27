import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const { dispose, get, getCommandIds, registerCommands, set, wrapCommand } = ViewletRegistry.create<ColorPickerState>()
