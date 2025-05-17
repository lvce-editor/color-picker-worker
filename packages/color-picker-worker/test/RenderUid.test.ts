import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'
import { renderUid } from '../src/parts/RenderUid/RenderUid.ts'

test('renderUid', () => {
  const oldState: ColorPickerState = createDefaultState()
  const newState: ColorPickerState = {
    ...createDefaultState(),
    uid: 1,
    parentUid: 2,
  }
  const result = renderUid(oldState, newState)
  expect(result).toEqual([RenderMethod.SetUid, 1, 2])
})
