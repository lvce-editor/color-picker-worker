import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffParentUid/DiffParentUid.ts'

test('isEqual with identical states', () => {
  const state = createDefaultState()
  expect(isEqual(state, state)).toBe(true)
})

test('isEqual with different versions', () => {
  const oldState = createDefaultState()
  const newState: ColorPickerState = {
    ...createDefaultState(),
    version: 2,
  }
  expect(isEqual(oldState, newState)).toBe(false)
})
