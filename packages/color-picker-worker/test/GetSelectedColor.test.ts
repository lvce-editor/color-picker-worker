import { expect, test } from '@jest/globals'
import * as GetSelectedColor from '../src/parts/GetSelectedColor/GetSelectedColor.ts'

test.each([
  [0, 1, 1, '#ff0000'],
  [120, 1, 1, '#00ff00'],
  [240, 1, 1, '#0000ff'],
  [360, 1, 1, '#ff0000'],
  [24, 1, 1, '#ff6600'],
  [0, 0, 0.5, '#808080'],
])('converts HSV(%s, %s, %s) to %s', (hue, saturation, value, expected) => {
  expect(GetSelectedColor.getSelectedColor(hue, saturation, value)).toBe(expected)
})
