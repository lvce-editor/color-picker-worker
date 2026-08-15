import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as ColorPickerStates from '../ColorPickerStates/ColorPickerStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number, parentUid: number): ColorPickerState => {
  const state: ColorPickerState = {
    closeButtonEnabled: false,
    color: '',
    colorAreaHeight: 0,
    colorAreaOffsetX: 0,
    colorAreaOffsetY: 0,
    focused: false,
    height,
    hue: 0,
    isColorAreaPointerDown: false,
    isPointerDown: false,
    max: 0,
    min: 0,
    offsetX: 0,
    parentUid,
    saturation: 0,
    selectedColor: '#000000',
    sliderThumbRadius: 0,
    uid,
    value: 0,
    version: 0,
    width,
    x,
    y,
  }
  const oldState = {
    ...state,
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  }
  ColorPickerStates.set(uid, oldState, state)
  return state
}
