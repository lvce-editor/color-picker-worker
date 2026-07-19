import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

const colorPickerSliderNode: VirtualDomNode = {
  childCount: 0,
  className: ClassNames.ColorPickerSlider,
  type: VirtualDomElements.Div,
}

export const getColorPickerSliderVirtualDom = (): readonly VirtualDomNode[] => {
  return [colorPickerSliderNode]
}
