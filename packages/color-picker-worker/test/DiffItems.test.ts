import { test, expect } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffItems from '../src/parts/DiffItems/DiffItems.js'

test.skip('diffItems returns expected result', () => {
  const oldState: ColorPickerState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = { ...CreateDefaultState.createDefaultState(), uid: 2 }
  const result = DiffItems.isEqual(oldState, newState)
  expect(result).toEqual([
    /* expected diff result */
  ])
})
