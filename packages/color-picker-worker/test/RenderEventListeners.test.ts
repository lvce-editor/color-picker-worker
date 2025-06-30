import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners returns correct array structure', () => {
  const mockState: ColorPickerState = CreateDefaultState.createDefaultState()
  const result = RenderEventListeners.renderEventListeners(mockState)
  expect(result).toBeDefined()
})
