import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const { get, set, dispose, getKeys, wrapCommand } = ViewletRegistry.create<ColorPickerState>()
