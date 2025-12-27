import type { Rectangle } from '../Rectangle/Rectangle.ts'

export interface ColorPickerState extends Rectangle {
  readonly color: string
  readonly isPointerDown: boolean
  readonly max: number
  readonly min: number
  readonly offsetX: number
  readonly parentUid: number
  readonly sliderThumbRadius: number
  readonly uid: number
  readonly version: number
}
