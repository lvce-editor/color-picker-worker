import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderCss } from '../src/parts/RenderCss/RenderCss.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'

test('renderCss - basic', () => {
  const oldState: ColorPickerState = createDefaultState()
  const newState: ColorPickerState = {
    ...oldState,
    offsetX: 100,
    color: '#ff0000',
  }
  const result = renderCss(oldState, newState)
  expect(result).toEqual([RenderMethod.SetCss, 0, expect.any(String)])
})

test('renderCss - different uid', () => {
  const oldState: ColorPickerState = createDefaultState()
  const newState: ColorPickerState = {
    ...oldState,
    uid: 2,
    offsetX: 100,
    color: '#ff0000',
  }
  const result = renderCss(oldState, newState)
  expect(result).toEqual([RenderMethod.SetCss, 2, expect.any(String)])
})
