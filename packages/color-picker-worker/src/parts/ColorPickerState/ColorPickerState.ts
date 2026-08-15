import type { Rectangle } from '../Rectangle/Rectangle.ts'

export interface ColorPickerState extends Rectangle {
  readonly closeButtonEnabled: boolean
  readonly color: string
  readonly colorAreaHeight: number
  readonly colorAreaOffsetX: number
  readonly colorAreaOffsetY: number
  readonly focused: boolean
  readonly hue: number
  readonly isColorAreaPointerDown: boolean
  readonly isPointerDown: boolean
  readonly max: number
  readonly min: number
  readonly offsetX: number
  readonly parentUid: number
  readonly saturation: number
  readonly selectedColor: string
  readonly sliderThumbRadius: number
  readonly uid: number
  readonly value: number
  readonly version: number
}
