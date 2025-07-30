import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as ColorPickerStates from '../ColorPickerStates/ColorPickerStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number, parentUid: number): ColorPickerState => {
  const state: ColorPickerState = {
    uid,
    color: '',
    height,
    max: 0,
    min: 0,
    offsetX: 0,
    width,
    x,
    y,
    version: 0,
    parentUid,
    isPointerDown: false,
  }
  ColorPickerStates.set(uid, state, state)
  return state
}
