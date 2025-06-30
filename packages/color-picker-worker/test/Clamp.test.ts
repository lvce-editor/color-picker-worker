import { expect, test } from '@jest/globals'
import * as Clamp from '../src/parts/Clamp/Clamp.ts'

test('clamp - lower bound', () => {
  const num: number = 5
  const min: number = 10
  const max: number = 20
  expect(Clamp.clamp(num, min, max)).toBe(10)
})
