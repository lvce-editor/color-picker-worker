import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'

export const createDefaultState = (): ColorPickerState => {
  return {
    closeButtonEnabled: false,
    color: '#000000',
    colorAreaHeight: 0,
    colorAreaOffsetX: 0,
    colorAreaOffsetY: 0,
    focused: false,
    height: 0,
    hue: 0,
    isColorAreaPointerDown: false,
    isPointerDown: false,
    max: 0,
    min: 0,
    offsetX: 0,
    parentUid: 0,
    saturation: 0,
    selectedColor: '#000000',
    sliderThumbRadius: 12,
    uid: 0,
    value: 0,
    version: 0,
    width: 0,
    x: 0,
    y: 0,
  }
}
