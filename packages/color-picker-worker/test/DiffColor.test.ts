import { test, expect } from '@jest/globals'
import { isEqual } from '../src/parts/DiffColor/DiffColor.js'

// Mock implementation of createDefaultState
const createDefaultState = () => ({
  color: '#000000',
  offsetX: 0,
  max: 100,
  uid: 1,
  min: 0,
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  items: [],
  bounds: { x: 0, y: 0, width: 0, height: 0 },
  modules: [],
})

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
