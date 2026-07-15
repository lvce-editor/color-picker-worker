import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getColorPickerSliderThumbVirtualDom } from '../GetColorPickerSliderThumbVirtualDom/GetColorPickerSliderThumbVirtualDom.ts'
import { getColorPickerSliderVirtualDom } from '../GetColorPickerSliderVirtualDom/GetColorPickerSliderVirtualDom.ts'

export const getColorPickerBottomVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 2,
      className: 'ColorPickerBottom',
      type: VirtualDomElements.Div,
    },
    {
      // TODO add ariavaluemin, ariavaluemax, ariavaluenow
      childCount: 1,
      className: ClassNames.ColorPickerSliderWrapper,
      onPointerDown: DomEventListenerFunctions.HandleSliderPointerDown,
      role: 'slider',
      tabIndex: 0,
      type: VirtualDomElements.Div,
    },
    ...getColorPickerSliderVirtualDom(),
    ...getColorPickerSliderThumbVirtualDom(),
  ]
}
