import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as GetColorPickerVirtualDom from '../GetColorPickerVirtualDom/GetColorPickerVirtualDom.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderCloseButton = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  const { uid } = newState
  const dom = GetColorPickerVirtualDom.getColorPickerVirtualDom(newState)
  return [RenderMethod.SetDom2, uid, dom]
}
