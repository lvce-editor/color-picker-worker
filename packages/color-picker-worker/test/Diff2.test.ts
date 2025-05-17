import { test, expect } from '@jest/globals'
import { diff2 } from '../src/parts/Diff2/Diff2.js'

test.skip('diff2 returns expected result', () => {
  const result = diff2(1)
  expect(result).toEqual([
    /* expected diff result */
  ])
})
