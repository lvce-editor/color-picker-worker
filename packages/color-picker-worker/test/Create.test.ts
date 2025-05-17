import { test, expect } from '@jest/globals'
import { create } from '../src/parts/Create/Create.js'

test('create returns expected result', () => {
  const result = create(1, 0, 0, 100, 100)
  expect(result).toEqual({
    uid: 1,
    color: '',
    height: 100,
    max: 0,
    min: 0,
    offsetX: 0,
    width: 0,
    x: 0,
    y: 0,
  })
})
