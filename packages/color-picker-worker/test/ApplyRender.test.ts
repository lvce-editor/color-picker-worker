import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as ApplyRender from '../src/parts/ApplyRender/ApplyRender.js'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'

test('applyRender applies render correctly', () => {
  const render: ColorPickerState = CreateDefaultState.createDefaultState()
  const state: ColorPickerState = CreateDefaultState.createDefaultState()
  const diffResult: number[] = [DiffType.RenderItems, DiffType.RenderBounds]
  const result = ApplyRender.applyRender(render, state, diffResult)
  expect(result).toBeDefined()
  expect(result.length).toBe(2)
})
