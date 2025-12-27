import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
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

export const getColorPickerVirtualDom = (): readonly VirtualDomNode[] => {
  return [parentNode, ...GetColorPickerRectangleVirtualDom.getColorPickerRectangleVirtualDom(), ...getColorPickerBottomVirtualDom()]
}
