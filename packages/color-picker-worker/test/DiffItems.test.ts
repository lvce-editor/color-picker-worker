import { test, expect } from '@jest/globals'
import * as DiffItems from '../src/parts/DiffItems/DiffItems.js'

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

test.skip('diffItems returns expected result', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), items: ['item1', 'item2'] }
  const result = DiffItems.isEqual(oldState, newState)
  expect(result).toEqual([
    /* expected diff result */
  ])
})
