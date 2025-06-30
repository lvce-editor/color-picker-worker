import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { diff } from '../src/parts/Diff/Diff.js'

test('diff returns expected result', () => {
  const oldState: ColorPickerState = createDefaultState()
  const newState: ColorPickerState = createDefaultState()
  const result = diff(oldState, newState)
  expect(result).toEqual([
    /* expected diff result */
  ])
})
