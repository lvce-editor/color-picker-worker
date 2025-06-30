import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderItems from '../src/parts/RenderItems/RenderItems.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'

test('renderItems - basic', () => {
  const oldState: ColorPickerState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = {
    ...oldState,
    uid: 1,
  }
  const result = RenderItems.renderItems(oldState, newState)
  expect(result).toEqual([RenderMethod.SetDom2, 1, expect.any(Object)])
})

test('renderItems - different uid', () => {
  const oldState: ColorPickerState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = {
    ...oldState,
    uid: 2,
  }
  const result = RenderItems.renderItems(oldState, newState)
  expect(result).toEqual([RenderMethod.SetDom2, 2, expect.any(Object)])
})
