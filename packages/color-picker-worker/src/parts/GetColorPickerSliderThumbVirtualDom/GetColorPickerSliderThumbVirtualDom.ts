import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
export const getColorPickerSliderThumbVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 0,
      className: ClassNames.ColorPickerSliderThumb,
      type: VirtualDomElements.Div,
    },
  ]
}
