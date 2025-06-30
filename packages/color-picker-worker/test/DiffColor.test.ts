import { test, expect } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffColor from '../src/parts/DiffColor/DiffColor.js'

test('isEqual returns true when states are equal', () => {
  const oldState = CreateDefaultState.createDefaultState()
  const newState = CreateDefaultState.createDefaultState()
  const result = DiffColor.isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual returns false when states are not equal', () => {
  const oldState = CreateDefaultState.createDefaultState()
  const newState = { ...CreateDefaultState.createDefaultState(), color: '#ff0000' }
  const result = DiffColor.isEqual(oldState, newState)
  expect(result).toBe(false)
})
