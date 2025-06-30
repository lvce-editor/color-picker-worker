import { test, expect } from '@jest/globals'
import { diff } from '../src/parts/Diff/Diff.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('diff returns expected result', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  const result = diff(oldState, newState)
  expect(result).toEqual([
    /* expected diff result */
  ])
})
