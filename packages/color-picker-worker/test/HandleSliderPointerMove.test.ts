import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleSliderPointerMove } from '../src/parts/HandleSliderPointerMove/HandleSliderPointerMove.ts'

test('pointer move at start', () => {
  const state = { ...createDefaultState(), min: 0, max: 100 }
  const result = handleSliderPointerMove(state, 0, 0)
  expect(result.offsetX).toBe(0)
  expect(result.color).toBe('hsl(0, 100%, 50%)')
})

test('pointer move at middle', () => {
  const state = { ...createDefaultState(), min: 0, max: 100 }
  const result = handleSliderPointerMove(state, 50, 0)
  expect(result.offsetX).toBe(50)
  expect(result.color).toBe('hsl(180, 100%, 50%)')
})

test('pointer move at end', () => {
  const state = { ...createDefaultState(), min: 0, max: 100 }
  const result = handleSliderPointerMove(state, 100, 0)
  expect(result.offsetX).toBe(100)
  expect(result.color).toBe('hsl(360, 100%, 50%)')
})

test('pointer move below min clamps to min', () => {
  const state = { ...createDefaultState(), min: 0, max: 100 }
  const result = handleSliderPointerMove(state, -10, 0)
  expect(result.offsetX).toBe(0)
  expect(result.color).toBe('hsl(0, 100%, 50%)')
})

test('pointer move above max clamps to max', () => {
  const state = { ...createDefaultState(), min: 0, max: 100 }
  const result = handleSliderPointerMove(state, 200, 0)
  expect(result.offsetX).toBe(100)
  expect(result.color).toBe('hsl(360, 100%, 50%)')
})
