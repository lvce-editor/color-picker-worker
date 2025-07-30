import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getColorPickerBottomVirtualDom } from '../GetColorPickerBottomVirtualDom/GetColorPickerBottomVirtualDom.ts'
import * as GetColorPickerRectangleVirtualDom from '../GetColorPickerRectangleVirtualDom/GetColorPickerRectangleVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.ColorPicker),
  childCount: 2,
}

export const getColorPickerVirtualDom = (): readonly VirtualDomNode[] => {
  return [parentNode, ...GetColorPickerRectangleVirtualDom.getColorPickerRectangleVirtualDom(), ...getColorPickerBottomVirtualDom()]
}
