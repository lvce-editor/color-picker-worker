import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'
import * as RenderUid from '../src/parts/RenderUid/RenderUid.ts'

test('renderUid', () => {
  const oldState: ColorPickerState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    uid: 1,
    parentUid: 2,
  }
  const result = RenderUid.renderUid(oldState, newState)
  expect(result).toEqual([RenderMethod.SetUid, 1, 2])
})
