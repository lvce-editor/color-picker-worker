import { test, expect } from '@jest/globals'
import { generateCss } from '../src/parts/GenerateCss/GenerateCss.ts'

test('generateCss', () => {
  const offsetX: number = 100
  const color: string = '#ff0000'
  const result: string = generateCss(offsetX, color)
  expect(result).toBe(':root { --ColorPickerOffsetX: 100px;\n--ColorPickerColor: #ff0000; }')
})

test('generateCss with zero offset', () => {
  const offsetX: number = 0
  const color: string = '#000000'
  const result: string = generateCss(offsetX, color)
  expect(result).toBe(':root { --ColorPickerOffsetX: 0px;\n--ColorPickerColor: #000000; }')
})

test('generateCss with rgb color', () => {
  const offsetX: number = 50
  const color: string = 'rgb(255, 0, 0)'
  const result: string = generateCss(offsetX, color)
  expect(result).toBe(':root { --ColorPickerOffsetX: 50px;\n--ColorPickerColor: rgb(255, 0, 0); }')
})
