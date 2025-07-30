import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { setRelativeX } from '../src/parts/SetRelativeX/SetRelativeX.ts'

test('setRelativeX updates color and offsetX correctly', () => {
  const state: ColorPickerState = {
    ...createDefaultState(),
    min: 0,
    max: 100,
  }
  const relativeX = 50
  const result = setRelativeX(state, relativeX)

  expect(result.color).toBeDefined()
  expect(result.offsetX).toBe(38)
  expect(result).not.toBe(state)
})

test('setRelativeX clamps values within min and max bounds', () => {
  const state: ColorPickerState = {
    ...createDefaultState(),
    min: 0,
    max: 100,
  }
  const tooLargeX = state.max + 100
  const tooSmallX = state.min - 100

  const resultLarge = setRelativeX(state, tooLargeX)
  const resultSmall = setRelativeX(state, tooSmallX)

  expect(resultLarge.offsetX).toBe(88)
  expect(resultSmall.offsetX).toBe(-12)
})