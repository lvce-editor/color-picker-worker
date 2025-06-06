import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const { get, set, wrapCommand, dispose } = ViewletRegistry.create<ColorPickerState>()
