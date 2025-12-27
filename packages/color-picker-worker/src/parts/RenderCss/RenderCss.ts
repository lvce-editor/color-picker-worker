import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import { generateCss } from '../GenerateCss/GenerateCss.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderCss = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  const { color, offsetX, uid } = newState
  const css = generateCss(offsetX, color)
  return [RenderMethod.SetCss, uid, css]
}
