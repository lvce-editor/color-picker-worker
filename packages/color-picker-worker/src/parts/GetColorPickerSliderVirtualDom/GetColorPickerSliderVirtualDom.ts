import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getColorPickerSliderVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ColorPickerSlider,
      childCount: 0,
      onPointerDown: DomEventListenerFunctions.HandleSliderPointerDown,
      onPointerMove: DomEventListenerFunctions.HandleSliderPointerMove,
    },
  ]
}
