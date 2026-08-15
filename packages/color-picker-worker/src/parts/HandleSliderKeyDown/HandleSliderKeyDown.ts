import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as Key from '../Key/Key.ts'
import * as SetRelativeX from '../SetRelativeX/SetRelativeX.ts'

const smallStep = 1
const largeStep = 10

const getNextRelativeX = (state: ColorPickerState, key: string): number | undefined => {
  const { max, min, offsetX, sliderThumbRadius } = state
  const current = offsetX + sliderThumbRadius
  switch (key) {
    case Key.ArrowDown:
    case Key.ArrowLeft:
      return current - smallStep
    case Key.ArrowRight:
    case Key.ArrowUp:
      return current + smallStep
    case Key.End:
      return max
    case Key.Home:
      return min
    case Key.PageDown:
      return current - largeStep
    case Key.PageUp:
      return current + largeStep
    default:
      return undefined
  }
}

export const handleSliderKeyDown = (state: ColorPickerState, key: string): ColorPickerState => {
  const { x } = state
  const relativeX = getNextRelativeX(state, key)
  if (relativeX === undefined) {
    return state
  }
  return SetRelativeX.setRelativeX(state, x + relativeX)
}
