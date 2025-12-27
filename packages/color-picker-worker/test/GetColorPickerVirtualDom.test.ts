import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as GetColorPickerVirtualDom from '../src/parts/GetColorPickerVirtualDom/GetColorPickerVirtualDom.ts'

test('getColorPickerVirtualDom', () => {
  const dom = GetColorPickerVirtualDom.getColorPickerVirtualDom()
  expect(dom).toEqual([
    {
      childCount: 2,
      className: 'Viewlet ColorPicker',
      onContextMenu: 3,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 3,
      className: 'ColorPickerRectangle',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: 'ColorPickerBackgroundColor',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: 'ColorPickerLight',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: 'ColorPickerDark',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 2,
      className: 'ColorPickerBottom',
      type: 4,
    },
    {
      childCount: 1,
      className: 'ColorPickerSliderWrapper',
      onPointerDown: 1,
      role: 'slider',
      type: 4,
    },
    {
      childCount: 0,
      className: 'ColorPickerSlider',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: 'ColorPickerSliderThumb',
      type: VirtualDomElements.Div,
    },
  ])
})
