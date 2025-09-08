import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
export const getColorPickerRectangleVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ColorPickerRectangle,
      childCount: 3,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ColorPickerBackgroundColor,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ColorPickerLight,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ColorPickerDark,
      childCount: 0,
    },
  ]
}
