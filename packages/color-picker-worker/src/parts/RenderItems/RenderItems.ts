import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as GetColorPickerVirtualDom from '../GetColorPickerVirtualDom/GetColorPickerVirtualDom.ts'

export const renderItems = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  const { uid } = newState
  const dom = GetColorPickerVirtualDom.getColorPickerVirtualDom()
  return ['Viewlet.setDom2', uid, dom]
}
