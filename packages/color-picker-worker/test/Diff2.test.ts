import { test, expect } from '@jest/globals'
import * as Diff2 from '../src/parts/Diff2/Diff2.js'

test.skip('diff2 returns expected result', () => {
  const uid: number = 1
  const result = Diff2.diff2(uid)
  expect(result).toEqual([
    /* expected diff result */
  ])
})
