import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SetColorAreaPosition from '../src/parts/SetColorAreaPosition/SetColorAreaPosition.ts'

const createState = (): ColorPickerState => ({
  ...CreateDefaultState.createDefaultState(),
  colorAreaHeight: 150,
  height: 200,
  width: 300,
  x: 100,
  y: 50,
})

test('sets saturation and value from a point in the color area', () => {
  const result = SetColorAreaPosition.setColorAreaPosition(createState(), 250, 125)
  expect(result).toMatchObject({
    colorAreaOffsetX: 150,
    colorAreaOffsetY: 75,
    saturation: 0.5,
    selectedColor: '#804040',
    value: 0.5,
  })
})

test('clamps a point before the color area', () => {
  const result = SetColorAreaPosition.setColorAreaPosition(createState(), 0, 0)
  expect(result).toMatchObject({
    colorAreaOffsetX: 0,
    colorAreaOffsetY: 0,
    saturation: 0,
    value: 1,
  })
})

test('clamps a point after the color area', () => {
  const result = SetColorAreaPosition.setColorAreaPosition(createState(), 500, 300)
  expect(result).toMatchObject({
    colorAreaOffsetX: 300,
    colorAreaOffsetY: 150,
    saturation: 1,
    value: 0,
  })
})

test('handles a zero-sized color area', () => {
  const state = CreateDefaultState.createDefaultState()
  const result = SetColorAreaPosition.setColorAreaPosition(state, 10, 10)
  expect(result).toMatchObject({ saturation: 0, value: 0 })
})
