import { expect, test } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.ts'
import * as Diff2 from '../src/parts/Diff2/Diff2.js'

test('diff2 returns expected result', () => {
  const uid: number = 1
  Create.create(uid, 0, 0, 100, 100, 0)
  const result = Diff2.diff2(uid)
  expect(result).toEqual([
    /* expected diff result */
  ])
})
