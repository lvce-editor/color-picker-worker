import type { Rectangle } from '../Rectangle/Rectangle.ts'

export interface ColorPickerState extends Rectangle {
  readonly color: string
  readonly offsetX: number
  readonly max: number
  readonly uid: number
  readonly min: number
  readonly version: number
  readonly parentUid: number
}

export const createDefaultState = (): ColorPickerState => ({
  color: '#000000',
  offsetX: 0,
  max: 255,
  min: 0,
  uid: 1,
  version: 1,
  parentUid: 0,
  x: 0,
  y: 0,
  width: 255,
  height: 20,
})
