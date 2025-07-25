import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetColorPickerRectangleVirtualDom from '../GetColorPickerRectangleVirtualDom/GetColorPickerRectangleVirtualDom.ts'
import * as GetColorPickerSliderThumbVirtualDom from '../GetColorPickerSliderThumbVirtualDom/GetColorPickerSliderThumbVirtualDom.ts'
import * as GetColorPickerSliderVirtualDom from '../GetColorPickerSliderVirtualDom/GetColorPickerSliderVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.ColorPicker),
  childCount: 3,
}

export const getColorPickerVirtualDom = (): readonly VirtualDomNode[] => {
  return [parentNode, ...GetColorPickerRectangleVirtualDom.getColorPickerRectangleVirtualDom(), ...GetColorPickerSliderVirtualDom.getColorPickerSliderVirtualDom(), ...GetColorPickerSliderThumbVirtualDom.getColorPickerSliderThumbVirtualDom()]
}
