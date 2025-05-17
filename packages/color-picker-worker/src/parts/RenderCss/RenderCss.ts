import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import { generateCss } from '../GenerateCss/GenerateCss.ts'

export const renderCss = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  const { offsetX, uid, color } = newState
  const css = generateCss(offsetX, color)
  return ['Viewlet.setCss', uid, css]
}
