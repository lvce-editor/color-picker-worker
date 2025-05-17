import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffCss/DiffCss.ts'

test('isEqual with identical states', () => {
  const state = createDefaultState()
  expect(isEqual(state, state)).toBe(true)
})

test('isEqual with different offsetX', () => {
  const oldState = createDefaultState()
  const newState: ColorPickerState = {
    ...createDefaultState(),
    offsetX: 100,
  }
  expect(isEqual(oldState, newState)).toBe(false)
})

test('isEqual with different color', () => {
  const oldState = createDefaultState()
  const newState: ColorPickerState = {
    ...createDefaultState(),
    color: '#ff0000',
  }
  expect(isEqual(oldState, newState)).toBe(false)
})

test('isEqual with different offsetX and color', () => {
  const oldState = createDefaultState()
  const newState: ColorPickerState = {
    ...createDefaultState(),
    offsetX: 100,
    color: '#ff0000',
  }
  expect(isEqual(oldState, newState)).toBe(false)
})
