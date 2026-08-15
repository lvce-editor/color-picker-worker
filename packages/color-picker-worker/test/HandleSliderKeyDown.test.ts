import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleSliderKeyDown from '../src/parts/HandleSliderKeyDown/HandleSliderKeyDown.ts'

const createState = (): ColorPickerState => ({
  ...CreateDefaultState.createDefaultState(),
  max: 300,
  min: 0,
  offsetX: 20,
  saturation: 1,
  sliderThumbRadius: 12,
  value: 1,
  x: 100,
})

test.each([
  ['ArrowLeft', 19],
  ['ArrowDown', 19],
  ['ArrowRight', 21],
  ['ArrowUp', 21],
  ['PageDown', 10],
  ['PageUp', 30],
  ['Home', -12],
  ['End', 288],
])('handles %s', (key, expectedOffsetX) => {
  const state = createState()
  const { selectedColor } = state
  const result = HandleSliderKeyDown.handleSliderKeyDown(state, key)
  expect(result.offsetX).toBe(expectedOffsetX)
  expect(result.selectedColor).not.toBe(selectedColor)
})

test('ignores other keys', () => {
  const state = createState()
  expect(HandleSliderKeyDown.handleSliderKeyDown(state, 'Tab')).toBe(state)
})
