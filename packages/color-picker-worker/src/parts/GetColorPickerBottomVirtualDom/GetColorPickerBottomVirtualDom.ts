import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getColorPickerSliderThumbVirtualDom } from '../GetColorPickerSliderThumbVirtualDom/GetColorPickerSliderThumbVirtualDom.ts'
import { getColorPickerSliderVirtualDom } from '../GetColorPickerSliderVirtualDom/GetColorPickerSliderVirtualDom.ts'
import * as TabIndex from '../TabIndex/TabIndex.ts'

const colorPickerBottomNode: VirtualDomNode = {
  childCount: 2,
  className: 'ColorPickerBottom',
  type: VirtualDomElements.Div,
}

const colorPickerSliderWrapperNode: VirtualDomNode = {
  // TODO add ariavaluemin, ariavaluemax, ariavaluenow
  childCount: 1,
  className: ClassNames.ColorPickerSliderWrapper,
  onPointerDown: DomEventListenerFunctions.HandleSliderPointerDown,
  role: AriaRoles.Slider,
  tabIndex: TabIndex.Focusable,
  type: VirtualDomElements.Div,
}

export const getColorPickerBottomVirtualDom = (): readonly VirtualDomNode[] => {
  return [colorPickerBottomNode, colorPickerSliderWrapperNode, ...getColorPickerSliderVirtualDom(), ...getColorPickerSliderThumbVirtualDom()]
}
