import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleSliderPointerDown } from '../src/parts/HandleSliderPointerDown/HandleSliderPointerDown.ts'

test('handleSliderPointerDown - within bounds', () => {
  const state = createDefaultState()
  const newState = handleSliderPointerDown(state, 100, 0)
  expect(newState.offsetX).toBe(100)
  expect(newState.color).toBeDefined()
})

test('handleSliderPointerDown - below min', () => {
  const state = createDefaultState()
  const newState = handleSliderPointerDown(state, -100, 0)
  expect(newState.offsetX).toBe(0)
  expect(newState.color).toBeDefined()
})

test('handleSliderPointerDown - above max', () => {
  const state = createDefaultState()
  const newState = handleSliderPointerDown(state, 1000, 0)
  expect(newState.offsetX).toBe(255)
  expect(newState.color).toBeDefined()
})
