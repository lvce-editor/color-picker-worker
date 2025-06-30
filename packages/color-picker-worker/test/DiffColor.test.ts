import { test, expect } from '@jest/globals'
import { isEqual } from '../src/parts/DiffColor/DiffColor.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('isEqual returns true when states are equal', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  const result = isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual returns false when states are not equal', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), color: '#ff0000' }
  const result = isEqual(oldState, newState)
  expect(result).toBe(false)
})
