import { test, expect } from '@jest/globals'
import * as GenerateCss from '../src/parts/GenerateCss/GenerateCss.ts'

test('generateCss', () => {
  const offsetX: number = 100
  const color: string = '#ff0000'
  const result: string = GenerateCss.generateCss(offsetX, color, 240, 80)
  expect(result).toBe(
    ':root { --ColorPickerOffsetX: 100px;\n--ColorPickerColor: #ff0000;\n--ColorPickerColorAreaOffsetX: 240px;\n--ColorPickerColorAreaOffsetY: 80px; }',
  )
})

test('generateCss with zero offset', () => {
  const offsetX: number = 0
  const color: string = '#000000'
  const result: string = GenerateCss.generateCss(offsetX, color, 0, 0)
  expect(result).toBe(
    ':root { --ColorPickerOffsetX: 0px;\n--ColorPickerColor: #000000;\n--ColorPickerColorAreaOffsetX: 0px;\n--ColorPickerColorAreaOffsetY: 0px; }',
  )
})

test('generateCss with rgb color', () => {
  const offsetX: number = 50
  const color: string = 'rgb(255, 0, 0)'
  const result: string = GenerateCss.generateCss(offsetX, color, 150, 75)
  expect(result).toBe(
    ':root { --ColorPickerOffsetX: 50px;\n--ColorPickerColor: rgb(255, 0, 0);\n--ColorPickerColorAreaOffsetX: 150px;\n--ColorPickerColorAreaOffsetY: 75px; }',
  )
})
