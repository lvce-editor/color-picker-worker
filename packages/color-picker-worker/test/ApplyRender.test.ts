import { test, expect } from '@jest/globals'
import { applyRender } from '../src/parts/ApplyRender/ApplyRender.js'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test.skip('applyRender applies render correctly', () => {
  const render = createDefaultState()
  const state = createDefaultState()
  const diffResult = [1, 2] // Example diff result
  const result = applyRender(render, state, diffResult)
  expect(result).toEqual([
    /* expected commands */
  ])
})
