import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { applyRender } from '../src/parts/ApplyRender/ApplyRender.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test.skip('applyRender applies render correctly', () => {
  const render: ColorPickerState = createDefaultState()
  const state: ColorPickerState = createDefaultState()
  const diffResult: number[] = [1, 2] // Example diff result
  const result = applyRender(render, state, diffResult)
  expect(result).toEqual([
    /* expected commands */
  ])
})
