import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as ApplyRender from '../src/parts/ApplyRender/ApplyRender.js'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test.skip('applyRender applies render correctly', () => {
  const render: ColorPickerState = CreateDefaultState.createDefaultState()
  const state: ColorPickerState = CreateDefaultState.createDefaultState()
  const diffResult: number[] = [1, 2] // Example diff result
  const result = ApplyRender.applyRender(render, state, diffResult)
  expect(result).toEqual([
    /* expected commands */
  ])
})
