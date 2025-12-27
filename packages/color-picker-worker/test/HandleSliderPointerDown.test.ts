import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleSliderPointerDown from '../src/parts/HandleSliderPointerDown/HandleSliderPointerDown.ts'

test('handleSliderPointerDown - within bounds', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    max: 100,
    min: 0,
  }
  const clientX: number = 100
  const offsetLeft: number = 0
  const newState: ColorPickerState = HandleSliderPointerDown.handleSliderPointerDown(state, clientX, offsetLeft)
  expect(newState.offsetX).toBe(88)
  expect(newState.color).toBeDefined()
})

test('handleSliderPointerDown - below min', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    max: 100,
    min: 0,
  }
  const clientX: number = -100
  const offsetLeft: number = 0
  const newState: ColorPickerState = HandleSliderPointerDown.handleSliderPointerDown(state, clientX, offsetLeft)
  expect(newState.offsetX).toBe(-12)
  expect(newState.color).toBeDefined()
})

test('handleSliderPointerDown - above max', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    max: 100,
    min: 0,
  }
  const clientX: number = 1000
  const offsetLeft: number = 0
  const newState: ColorPickerState = HandleSliderPointerDown.handleSliderPointerDown(state, clientX, offsetLeft)
  expect(newState.offsetX).toBe(88)
  expect(newState.color).toBeDefined()
})
