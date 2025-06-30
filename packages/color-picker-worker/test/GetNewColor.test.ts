import { test, expect } from '@jest/globals'
import * as GetNewColor from '../src/parts/GetNewColor/GetNewColor.ts'

test('getNewColor at start', () => {
  const offsetX: number = 0
  const max: number = 100
  const result: string = GetNewColor.getNewColor(offsetX, max)
  expect(result).toBe('hsl(0, 100%, 50%)')
})

test('getNewColor at middle', () => {
  const offsetX: number = 50
  const max: number = 100
  const result: string = GetNewColor.getNewColor(offsetX, max)
  expect(result).toBe('hsl(180, 100%, 50%)')
})

test('getNewColor at end', () => {
  const offsetX: number = 100
  const max: number = 100
  const result: string = GetNewColor.getNewColor(offsetX, max)
  expect(result).toBe('hsl(360, 100%, 50%)')
})

test('getNewColor with different max', () => {
  const offsetX: number = 50
  const max: number = 200
  const result: string = GetNewColor.getNewColor(offsetX, max)
  expect(result).toBe('hsl(90, 100%, 50%)')
})
