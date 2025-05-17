import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleSliderPointerDown } from '../src/parts/HandleSliderPointerDown/HandleSliderPointerDown.ts'

test('pointer down at start', () => {
  const state = { ...createDefaultState(), min: 0, max: 100, x: 10 }
  const result = handleSliderPointerDown(state, 10, 0)
  expect(result.offsetX).toBe(0)
  expect(result.color).toBe('hsl(0, 100%, 50%)')
})

test('pointer down at middle', () => {
  const state = { ...createDefaultState(), min: 0, max: 100, x: 10 }
  const result = handleSliderPointerDown(state, 60, 0)
  expect(result.offsetX).toBe(50)
  expect(result.color).toBe('hsl(180, 100%, 50%)')
})

test('pointer down at end', () => {
  const state = { ...createDefaultState(), min: 0, max: 100, x: 10 }
  const result = handleSliderPointerDown(state, 110, 0)
  expect(result.offsetX).toBe(100)
  expect(result.color).toBe('hsl(360, 100%, 50%)')
})

test('pointer down below min clamps to min', () => {
  const state = { ...createDefaultState(), min: 0, max: 100, x: 10 }
  const result = handleSliderPointerDown(state, -10, 0)
  expect(result.offsetX).toBe(0)
  expect(result.color).toBe('hsl(0, 100%, 50%)')
})

test('pointer down above max clamps to max', () => {
  const state = { ...createDefaultState(), min: 0, max: 100, x: 10 }
  const result = handleSliderPointerDown(state, 200, 0)
  expect(result.offsetX).toBe(100)
  expect(result.color).toBe('hsl(360, 100%, 50%)')
})
