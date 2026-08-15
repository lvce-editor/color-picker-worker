import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as Clamp from '../Clamp/Clamp.ts'

export const setColorAreaPosition = (state: ColorPickerState, eventX: number, eventY: number): ColorPickerState => {
  const { colorAreaHeight, width, x, y } = state
  const colorAreaOffsetX = Clamp.clamp(eventX - x, 0, width)
  const colorAreaOffsetY = Clamp.clamp(eventY - y, 0, colorAreaHeight)
  const saturation = width === 0 ? 0 : colorAreaOffsetX / width
  const value = colorAreaHeight === 0 ? 0 : 1 - colorAreaOffsetY / colorAreaHeight
  return {
    ...state,
    colorAreaOffsetX,
    colorAreaOffsetY,
    saturation,
    value,
  }
}
