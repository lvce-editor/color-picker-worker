import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffCss from '../src/parts/DiffCss/DiffCss.ts'

test('isEqual with identical states', () => {
  const state = CreateDefaultState.createDefaultState()
  expect(DiffCss.isEqual(state, state)).toBe(true)
})

test('isEqual with different offsetX', () => {
  const oldState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    offsetX: 100,
  }
  expect(DiffCss.isEqual(oldState, newState)).toBe(false)
})

test('isEqual with different color', () => {
  const oldState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    color: '#ff0000',
  }
  expect(DiffCss.isEqual(oldState, newState)).toBe(false)
})

test('isEqual with different offsetX and color', () => {
  const oldState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    offsetX: 100,
    color: '#ff0000',
  }
  expect(DiffCss.isEqual(oldState, newState)).toBe(false)
})
