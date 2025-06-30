import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { diff } from '../src/parts/Diff/Diff.js'

test('diff returns expected result', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  const result = diff(oldState, newState)
  expect(result).toEqual([
    /* expected diff result */
  ])
})
