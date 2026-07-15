import { expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffFocus from '../src/parts/DiffFocus/DiffFocus.ts'

test('is equal when focus is unchanged', () => {
  const state = CreateDefaultState.createDefaultState()
  expect(DiffFocus.isEqual(state, state)).toBe(true)
})

test('is not equal when focus changes', () => {
  const oldState = CreateDefaultState.createDefaultState()
  const newState = { ...oldState, focused: true }
  expect(DiffFocus.isEqual(oldState, newState)).toBe(false)
})
