import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import { generateCss } from '../GenerateCss/GenerateCss.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderCss = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  const { offsetX, uid, color } = newState
  const css = generateCss(offsetX, color)
  return [RenderMethod.SetCss, uid, css]
}
