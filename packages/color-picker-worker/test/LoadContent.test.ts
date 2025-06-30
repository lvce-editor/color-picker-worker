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
  expect(result.version).toBe(1)
  expect(result.x).toBeDefined()
  expect(result.y).toBeDefined()
  expect(result.width).toBeDefined()
  expect(result.height).toBeDefined()
})
