import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'

test('renderItems - basic', () => {
  const oldState = createDefaultState()
  const newState = {
    ...oldState,
    uid: 1,
  }
  const result = renderItems(oldState, newState)
  expect(result).toEqual([RenderMethod.SetDom2, 1, expect.any(Object)])
})

test('renderItems - different uid', () => {
  const oldState = createDefaultState()
  const newState = {
    ...oldState,
    uid: 2,
  }
  const result = renderItems(oldState, newState)
  expect(result).toEqual([RenderMethod.SetDom2, 2, expect.any(Object)])
})
