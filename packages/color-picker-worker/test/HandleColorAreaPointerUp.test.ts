import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleColorAreaPointerUp from '../src/parts/HandleColorAreaPointerUp/HandleColorAreaPointerUp.ts'

test('ends the active color-area drag', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    isColorAreaPointerDown: true,
  }
  expect(HandleColorAreaPointerUp.handleColorAreaPointerUp(state).isColorAreaPointerDown).toBe(false)
})
