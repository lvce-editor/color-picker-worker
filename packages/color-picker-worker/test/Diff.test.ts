import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Diff from '../src/parts/Diff/Diff.js'

test('diff returns expected result', () => {
  const oldState: ColorPickerState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = CreateDefaultState.createDefaultState()
  const result = Diff.diff(oldState, newState)
  expect(result).toEqual([
    /* expected diff result */
  ])
})
