import { test, expect } from '@jest/globals'
import * as GetBounds from '../src/parts/GetBounds/GetBounds.ts'

test('getBounds', () => {
  const result = GetBounds.getBounds()
  expect(result).toEqual({
    height: 200,
    width: 300,
    x: 20,
    y: 20,
  })
})
