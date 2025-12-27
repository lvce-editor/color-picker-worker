import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
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
      className: 'ColorPickerSliderWrapper',
      onPointerDown: DomEventListenerFunctions.HandleSliderPointerDown,
      role: 'slider',
      type: VirtualDomElements.Div,
    },
    ...getColorPickerSliderVirtualDom(),
    ...getColorPickerSliderThumbVirtualDom(),
  ]
}
