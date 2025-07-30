import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getColorPickerSliderThumbVirtualDom } from '../GetColorPickerSliderThumbVirtualDom/GetColorPickerSliderThumbVirtualDom.ts'
import { getColorPickerSliderVirtualDom } from '../GetColorPickerSliderVirtualDom/GetColorPickerSliderVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getColorPickerBottomVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'ColorPickerBottom',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Div,
      className: 'ColorPickerSliderWrapper',
      onPointerDown: DomEventListenerFunctions.HandleSliderPointerDown,
      role: 'slider',
      // TODO add ariavaluemin, ariavaluemax, ariavaluenow
      childCount: 1,
    },
    ...getColorPickerSliderVirtualDom(),
    ...getColorPickerSliderThumbVirtualDom(),
  ]
}
