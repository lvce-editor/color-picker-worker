import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleSliderPointerDown } from '../src/parts/HandleSliderPointerDown/HandleSliderPointerDown.ts'

test('handleSliderPointerDown - within bounds', () => {
  const state: ColorPickerState = createDefaultState()
  const clientX: number = 100
  const offsetLeft: number = 0
  const newState: ColorPickerState = handleSliderPointerDown(state, clientX, offsetLeft)
  expect(newState.offsetX).toBe(0)
  expect(newState.color).toBeDefined()
})

test('handleSliderPointerDown - below min', () => {
  const state: ColorPickerState = createDefaultState()
  const clientX: number = -100
  const offsetLeft: number = 0
  const newState: ColorPickerState = handleSliderPointerDown(state, clientX, offsetLeft)
  expect(newState.offsetX).toBe(0)
  expect(newState.color).toBeDefined()
})

test('handleSliderPointerDown - above max', () => {
  const state: ColorPickerState = createDefaultState()
  const clientX: number = 1000
  const offsetLeft: number = 0
  const newState: ColorPickerState = handleSliderPointerDown(state, clientX, offsetLeft)
  expect(newState.offsetX).toBe(0)
  expect(newState.color).toBeDefined()
})
