import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getColorPickerBottomVirtualDom } from '../GetColorPickerBottomVirtualDom/GetColorPickerBottomVirtualDom.ts'
import * as GetColorPickerRectangleVirtualDom from '../GetColorPickerRectangleVirtualDom/GetColorPickerRectangleVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const parentNode: VirtualDomNode = {
  childCount: 2,
  className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.ColorPicker),
  onContextMenu: DomEventListenerFunctions.HandleContextMenu,
  type: VirtualDomElements.Div,
}

const closeButtonNode: VirtualDomNode = {
  childCount: 0,
  className: ClassNames.ColorPickerCloseButton,
  onClick: DomEventListenerFunctions.HandleCloseButton,
  type: VirtualDomElements.Div,
}

export const getColorPickerVirtualDom = (state: ColorPickerState): readonly VirtualDomNode[] => {
  const nodes: VirtualDomNode[] = [parentNode, ...GetColorPickerRectangleVirtualDom.getColorPickerRectangleVirtualDom(), ...getColorPickerBottomVirtualDom()]
  if (state.closeButtonEnabled) {
    nodes.push(closeButtonNode)
  }
  return nodes
}
