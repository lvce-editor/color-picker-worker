import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffParentUid from '../src/parts/DiffParentUid/DiffParentUid.ts'

test('isEqual with identical states', () => {
  const state = CreateDefaultState.createDefaultState()
  expect(DiffParentUid.isEqual(state, state)).toBe(true)
})

test('isEqual with different versions', () => {
  const oldState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    version: 2,
  }
  expect(DiffParentUid.isEqual(oldState, newState)).toBe(false)
})
