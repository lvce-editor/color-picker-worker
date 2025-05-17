import { test, expect } from '@jest/globals'
import { getBounds } from '../src/parts/GetBounds/GetBounds.ts'

test('getBounds', () => {
  const result = getBounds()
  expect(result).toEqual({
    x: 20,
    y: 20,
    width: 300,
    height: 200,
  })
})
