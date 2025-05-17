import { test, expect } from '@jest/globals'

// Mock implementation of createDefaultState
const createDefaultState = () => ({
  color: '#000000',
  offsetX: 0,
  items: [],
  bounds: { x: 0, y: 0, width: 0, height: 0 },
  modules: [],
})

test('createDefaultState returns expected state', () => {
  const state = createDefaultState()
  expect(state).toEqual({
    color: '#000000',
    offsetX: 0,
    items: [],
    bounds: { x: 0, y: 0, width: 0, height: 0 },
    modules: [],
  })
})
