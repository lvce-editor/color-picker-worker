import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffItems from '../src/parts/DiffItems/DiffItems.js'

test.skip('diffItems returns expected result', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), items: ['item1', 'item2'] }
  const result = DiffItems.isEqual(oldState, newState)
  expect(result).toEqual([
    /* expected diff result */
  ])
})
