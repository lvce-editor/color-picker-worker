import { expect, test } from '@jest/globals'
import * as GetColorPickerVirtualDom from '../src/parts/GetColorPickerVirtualDom/GetColorPickerVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getColorPickerVirtualDom', () => {
  const dom = GetColorPickerVirtualDom.getColorPickerVirtualDom()
  expect(dom).toEqual([
    {
      type: VirtualDomElements.Div,
      className: 'Viewlet ColorPicker',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Div,
      className: 'ColorPickerRectangle',
      childCount: 3,
    },
    {
      type: VirtualDomElements.Div,
      className: 'ColorPickerBackgroundColor',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: 'ColorPickerLight',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: 'ColorPickerDark',
      childCount: 0,
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
      type: VirtualDomElements.Div,
      className: 'ColorPickerSlider',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: 'ColorPickerSliderThumb',
      childCount: 0,
    },
  ])
})
