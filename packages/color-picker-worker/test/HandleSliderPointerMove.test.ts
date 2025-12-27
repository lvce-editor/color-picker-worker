import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleSliderPointerMove from '../src/parts/HandleSliderPointerMove/HandleSliderPointerMove.ts'

test('pointer move at start', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    isPointerDown: true,
    max: 100,
    min: 0,
  }
  const clientX: number = 0
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result.offsetX).toBe(-12)
  expect(result.color).toBe('hsl(0, 100%, 50%)')
})

test('pointer move at middle', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    isPointerDown: true,
    max: 100,
    min: 0,
  }
  const clientX: number = 50
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result.offsetX).toBe(38)
  expect(result.color).toBe('hsl(180, 100%, 50%)')
})

test('pointer move at end', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    isPointerDown: true,
    max: 100,
    min: 0,
  }
  const clientX: number = 100
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result.offsetX).toBe(88)
  expect(result.color).toBe('hsl(360, 100%, 50%)')
})

test('pointer move below min clamps to min', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    isPointerDown: true,
    max: 100,
    min: 0,
  }
  const clientX: number = -10
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result.offsetX).toBe(-12)
  expect(result.color).toBe('hsl(0, 100%, 50%)')
})

test('pointer move above max clamps to max', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    isPointerDown: true,
    max: 100,
    min: 0,
  }
  const clientX: number = 200
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result.offsetX).toBe(88)
  expect(result.color).toBe('hsl(360, 100%, 50%)')
})

test('returns state unchanged when isPointerDown is false', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    color: 'hsl(90, 100%, 50%)',
    isPointerDown: false,
    offsetX: 25,
  }
  const clientX: number = 50
  const offsetLeft: number = 0
  const result: ColorPickerState = HandleSliderPointerMove.handleSliderPointerMove(state, clientX, offsetLeft)
  expect(result).toBe(state)
  expect(result.isPointerDown).toBe(false)
  expect(result.offsetX).toBe(25)
  expect(result.color).toBe('hsl(90, 100%, 50%)')
})
