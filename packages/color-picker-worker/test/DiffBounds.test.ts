import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffBounds/DiffBounds.ts'

test('isEqual with identical states', () => {
  const state = createDefaultState()
  expect(isEqual(state, state)).toBe(true)
})

test('isEqual with different x', () => {
  const oldState = createDefaultState()
  const newState: ColorPickerState = {
    ...createDefaultState(),
    x: 100,
  }
  expect(isEqual(oldState, newState)).toBe(false)
})

test('isEqual with different y', () => {
  const oldState = createDefaultState()
  const newState: ColorPickerState = {
    ...createDefaultState(),
    y: 100,
  }
  expect(isEqual(oldState, newState)).toBe(false)
})

test('isEqual with different width', () => {
  const oldState = createDefaultState()
  const newState: ColorPickerState = {
    ...createDefaultState(),
    width: 200,
  }
  expect(isEqual(oldState, newState)).toBe(false)
})

test('isEqual with different height', () => {
  const oldState = createDefaultState()
  const newState: ColorPickerState = {
    ...createDefaultState(),
    height: 200,
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
