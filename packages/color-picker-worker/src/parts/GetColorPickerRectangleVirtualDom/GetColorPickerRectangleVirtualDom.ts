import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
export const getColorPickerRectangleVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 3,
      className: ClassNames.ColorPickerRectangle,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: ClassNames.ColorPickerBackgroundColor,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: ClassNames.ColorPickerLight,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: ClassNames.ColorPickerDark,
      type: VirtualDomElements.Div,
    },
  ]
}
