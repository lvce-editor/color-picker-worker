import { test, expect } from '@jest/globals'
import { applyRender } from '../src/parts/ApplyRender/ApplyRender.js'

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

test.skip('applyRender applies render correctly', () => {
  const render = createDefaultState()
  const state = createDefaultState()
  const diffResult = [1, 2] // Example diff result
  const result = applyRender(render, state, diffResult)
  expect(result).toEqual([
    /* expected commands */
  ])
})
