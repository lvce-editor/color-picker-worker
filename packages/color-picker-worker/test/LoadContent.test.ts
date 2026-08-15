import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as LoadContent from '../src/parts/LoadContent/LoadContent.ts'

test('loadContent - basic', () => {
  const state: ColorPickerState = CreateDefaultState.createDefaultState()
  const result: ColorPickerState = LoadContent.loadContent(state)
  expect(result.offsetX).toBe(20)
  expect(result.max).toBe(300)
  expect(result.color).toBeDefined()
  expect(result.colorAreaHeight).toBe(150)
  expect(result.colorAreaOffsetX).toBe(300)
  expect(result.colorAreaOffsetY).toBe(0)
  expect(result.focused).toBe(true)
  expect(result.hue).toBe(24)
  expect(result.version).toBe(1)
  expect(result.saturation).toBe(1)
  expect(result.selectedColor).toBe('#ff6600')
  expect(result.value).toBe(1)
  expect(result.x).toBeDefined()
  expect(result.y).toBeDefined()
  expect(result.width).toBeDefined()
  expect(result.height).toBeDefined()
})

test('loadContent preserves bounds supplied by the editor', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    height: 200,
    width: 300,
    x: 120,
    y: 240,
  }
  const result: ColorPickerState = LoadContent.loadContent(state)
  expect(result).toMatchObject({
    height: 200,
    width: 300,
    x: 120,
    y: 240,
  })
})

test('loadContent initializes from the selected color', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    height: 200,
    width: 300,
  }
  const result: ColorPickerState = LoadContent.loadContent(state, 'hsl(240, 100%, 50%)')
  expect(result).toMatchObject({
    colorAreaOffsetX: 300,
    colorAreaOffsetY: 0,
    hue: 240,
    offsetX: 188,
    saturation: 1,
    selectedColor: '#0000ff',
    value: 1,
  })
})

test('loadContent uses a fresh default for an invalid color', () => {
  const state: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    hue: 240,
    selectedColor: '#0000ff',
  }
  const result: ColorPickerState = LoadContent.loadContent(state, 'invalid')
  expect(result.hue).toBe(24)
  expect(result.selectedColor).toBe('#ff6600')
})
