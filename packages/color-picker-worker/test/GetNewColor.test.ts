import { test, expect } from '@jest/globals'
import { getNewColor } from '../src/parts/GetNewColor/GetNewColor.ts'

test('getNewColor at start', () => {
  const result = getNewColor(0, 100)
  expect(result).toBe('hsl(0, 100%, 50%)')
})

test('getNewColor at middle', () => {
  const result = getNewColor(50, 100)
  expect(result).toBe('hsl(180, 100%, 50%)')
})

test('getNewColor at end', () => {
  const result = getNewColor(100, 100)
  expect(result).toBe('hsl(360, 100%, 50%)')
})

test('getNewColor with different max', () => {
  const result = getNewColor(50, 200)
  expect(result).toBe('hsl(90, 100%, 50%)')
})
