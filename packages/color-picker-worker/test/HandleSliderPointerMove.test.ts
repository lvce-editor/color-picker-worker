import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleSliderPointerMove from '../src/parts/HandleSliderPointerMove/HandleSliderPointerMove.ts'

test('pointer move at start', () => {
  const state: ColorPickerState = { ...CreateDefaultState.createDefaultState(), min: 0, max: 100 }
  const clientX: number = 0
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result.offsetX).toBe(0)
  expect(result.color).toBe('hsl(0, 100%, 50%)')
})

test('pointer move at middle', () => {
  const state: ColorPickerState = { ...CreateDefaultState.createDefaultState(), min: 0, max: 100 }
  const clientX: number = 50
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result.offsetX).toBe(50)
  expect(result.color).toBe('hsl(180, 100%, 50%)')
})

test('pointer move at end', () => {
  const state: ColorPickerState = { ...CreateDefaultState.createDefaultState(), min: 0, max: 100 }
  const clientX: number = 100
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result.offsetX).toBe(100)
  expect(result.color).toBe('hsl(360, 100%, 50%)')
})

test('pointer move below min clamps to min', () => {
  const state: ColorPickerState = { ...CreateDefaultState.createDefaultState(), min: 0, max: 100 }
  const clientX: number = -10
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result.offsetX).toBe(0)
  expect(result.color).toBe('hsl(0, 100%, 50%)')
})

test('pointer move above max clamps to max', () => {
  const state: ColorPickerState = { ...CreateDefaultState.createDefaultState(), min: 0, max: 100 }
  const clientX: number = 200
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result.offsetX).toBe(100)
  expect(result.color).toBe('hsl(360, 100%, 50%)')
})
