import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { getBounds } from '../src/parts/GetBounds/GetBounds.ts'
import { getNewColor } from '../src/parts/GetNewColor/GetNewColor.ts'
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
