import { test, expect } from '@jest/globals'
import { generateCss } from '../src/parts/GenerateCss/GenerateCss.ts'

test('generateCss', () => {
  const result = generateCss(100, '#ff0000')
  expect(result).toBe(':root { --ColorPickerOffsetX: 100px;\n--ColorPickerColor: #ff0000; }')
})

test('generateCss with zero offset', () => {
  const result = generateCss(0, '#000000')
  expect(result).toBe(':root { --ColorPickerOffsetX: 0px;\n--ColorPickerColor: #000000; }')
})

test('generateCss with rgb color', () => {
  const result = generateCss(50, 'rgb(255, 0, 0)')
  expect(result).toBe(':root { --ColorPickerOffsetX: 50px;\n--ColorPickerColor: rgb(255, 0, 0); }')
})
