import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleColorAreaPointerDown from '../src/parts/HandleColorAreaPointerDown/HandleColorAreaPointerDown.ts'

test('starts a drag and selects the pointer position', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    colorAreaHeight: 100,
    width: 200,
  }
  const result = HandleColorAreaPointerDown.handleColorAreaPointerDown(state, 100, 25)
  expect(result).toMatchObject({
    colorAreaOffsetX: 100,
    colorAreaOffsetY: 25,
    isColorAreaPointerDown: true,
    saturation: 0.5,
    value: 0.75,
  })
})
