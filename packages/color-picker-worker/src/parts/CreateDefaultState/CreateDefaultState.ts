import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const createDefaultState = (): ColorPickerState => {
  return {
    color: '#000000',
    offsetX: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    max: 0,
    min: 0,
    uid: 0,
    version: 0,
  }
}
