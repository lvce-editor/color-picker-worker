import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleColorAreaPointerMove from '../src/parts/HandleColorAreaPointerMove/HandleColorAreaPointerMove.ts'

const createState = (isColorAreaPointerDown: boolean): ColorPickerState => ({
  ...CreateDefaultState.createDefaultState(),
  colorAreaHeight: 100,
  isColorAreaPointerDown,
  width: 200,
})

test('updates the selection during a drag', () => {
  const result = HandleColorAreaPointerMove.handleColorAreaPointerMove(createState(true), 150, 80)
  expect(result).toMatchObject({ colorAreaOffsetX: 150, colorAreaOffsetY: 80, saturation: 0.75 })
  expect(result.value).toBeCloseTo(0.2)
})

test('does not update the selection without an active drag', () => {
  const state = createState(false)
  expect(HandleColorAreaPointerMove.handleColorAreaPointerMove(state, 150, 80)).toBe(state)
})
