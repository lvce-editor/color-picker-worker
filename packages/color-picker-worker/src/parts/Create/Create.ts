import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as SearchViewStates from '../ColorPickerStates/ColorPickerStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number): ColorPickerState => {
  const state: ColorPickerState = {
    uid,
    color: '',
    height,
    max: 0,
    min: 0,
    offsetX: 0,
    width: 0,
    x,
    y,
  }
  SearchViewStates.set(uid, state, state)
  return state
}
