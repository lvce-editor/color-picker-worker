import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

const colorPickerRectangleNode: VirtualDomNode = {
  childCount: 4,
  className: ClassNames.ColorPickerRectangle,
  onPointerDown: DomEventListenerFunctions.HandleColorAreaPointerDown,
  type: VirtualDomElements.Div,
}

const colorPickerBackgroundColorNode: VirtualDomNode = {
  childCount: 0,
  className: ClassNames.ColorPickerBackgroundColor,
  type: VirtualDomElements.Div,
}

const colorPickerLightNode: VirtualDomNode = {
  childCount: 0,
  className: ClassNames.ColorPickerLight,
  type: VirtualDomElements.Div,
}

const colorPickerDarkNode: VirtualDomNode = {
  childCount: 0,
  className: ClassNames.ColorPickerDark,
  type: VirtualDomElements.Div,
}

const colorPickerSelectionThumbNode: VirtualDomNode = {
  childCount: 0,
  className: ClassNames.ColorPickerSelectionThumb,
  type: VirtualDomElements.Div,
}

export const getColorPickerRectangleVirtualDom = (): readonly VirtualDomNode[] => {
  return [colorPickerRectangleNode, colorPickerBackgroundColorNode, colorPickerLightNode, colorPickerDarkNode, colorPickerSelectionThumbNode]
}
