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
    isColorAreaPointerDown: false,
    isPointerDown: false,
    max: 0,
    min: 0,
    offsetX: 0,
    parentUid,
    saturation: 0,
    sliderThumbRadius: 0,
    uid,
    value: 0,
    version: 0,
    width,
    x,
    y,
  }
  ColorPickerStates.set(uid, state, state)
  return state
}
