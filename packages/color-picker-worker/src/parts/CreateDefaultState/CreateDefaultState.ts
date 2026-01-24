import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const createDefaultState = (): ColorPickerState => {
  return {
    closeButtonEnabled: false,
    color: '#000000',
    height: 0,
    isPointerDown: false,
    max: 0,
    min: 0,
    offsetX: 0,
    parentUid: 0,
    sliderThumbRadius: 12,
    uid: 0,
    version: 0,
    width: 0,
    x: 0,
    y: 0,
  }
}
