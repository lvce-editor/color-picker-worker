import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleSliderPointerUp from '../src/parts/HandleSliderPointerUp/HandleSliderPointerUp.ts'

test('sets isPointerDown to false', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    color: 'hsl(180, 100%, 50%)',
    isPointerDown: true,
    offsetX: 50,
  }
  const result: ColorPickerState = HandleSliderPointerUp.handleSliderPointerUp(state)
  expect(result.isPointerDown).toBe(false)
})

test('preserves other state properties', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    color: 'hsl(270, 100%, 50%)',
    isPointerDown: true,
    max: 100,
    min: 0,
    offsetX: 75,
  }
  const result: ColorPickerState = HandleSliderPointerUp.handleSliderPointerUp(state)
  expect(result.offsetX).toBe(75)
  expect(result.color).toBe('hsl(270, 100%, 50%)')
  expect(result.min).toBe(0)
  expect(result.max).toBe(100)
})

test('works when isPointerDown is already false', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    color: 'hsl(90, 100%, 50%)',
    isPointerDown: false,
    offsetX: 25,
  }
  const result: ColorPickerState = HandleSliderPointerUp.handleSliderPointerUp(state)
  expect(result.isPointerDown).toBe(false)
  expect(result.offsetX).toBe(25)
  expect(result.color).toBe('hsl(90, 100%, 50%)')
})
