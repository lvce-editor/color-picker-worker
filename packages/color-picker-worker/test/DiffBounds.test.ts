import { test, expect } from '@jest/globals'
<<<<<<< HEAD
import { isEqual } from '../src/parts/DiffBounds/DiffBounds.js'

// Mock implementation of createDefaultState
const createDefaultState = () => ({
  color: '#000000',
  offsetX: 0,
  max: 100,
  uid: 1,
  min: 0,
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  items: [],
  bounds: { x: 0, y: 0, width: 0, height: 0 },
  modules: [],
})

test('isEqual returns true when states are equal', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  const result = isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual returns false when states are not equal', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), x: 10 }
  const result = isEqual(oldState, newState)
  expect(result).toBe(false)
=======
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
>>>>>>> origin/main
})
