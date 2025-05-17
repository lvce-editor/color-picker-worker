import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

test('loadContent - basic', () => {
  const state = createDefaultState()
  const result = loadContent(state)
  expect(result.offsetX).toBe(20)
  expect(result.max).toBe(300)
  expect(result.color).toBeDefined()
  expect(result.version).toBe(1)
  expect(result.x).toBeDefined()
  expect(result.y).toBeDefined()
  expect(result.width).toBeDefined()
  expect(result.height).toBeDefined()
})
