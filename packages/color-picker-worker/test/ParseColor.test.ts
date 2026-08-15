import { expect, test } from '@jest/globals'
import * as ParseColor from '../src/parts/ParseColor/ParseColor.ts'

test.each([
  ['#0f0', { hue: 120, saturation: 1, selectedColor: '#00ff00', value: 1 }],
  ['#1234', { hue: 210, saturation: 2 / 3, selectedColor: '#112233', value: 0.2 }],
  ['#112233', { hue: 210, saturation: 2 / 3, selectedColor: '#112233', value: 0.2 }],
  ['#11223344', { hue: 210, saturation: 2 / 3, selectedColor: '#112233', value: 0.2 }],
  ['rgb(255, 0, 128)', { hue: 329.88235294117646, saturation: 1, selectedColor: '#ff0080', value: 1 }],
  ['rgba(255, 0, 128, 0.25)', { hue: 329.88235294117646, saturation: 1, selectedColor: '#ff0080', value: 1 }],
  ['rgb(100% 0% 50% / 25%)', { hue: 330, saturation: 1, selectedColor: '#ff0080', value: 1 }],
  ['hsl(240, 100%, 50%)', { hue: 240, saturation: 1, selectedColor: '#0000ff', value: 1 }],
  ['hsla(120deg 100% 25% / 50%)', { hue: 120, saturation: 1, selectedColor: '#008000', value: 0.5 }],
])('parses %s', (value, expected: Readonly<ParseColor.ParsedColor>) => {
  const result = ParseColor.parseColor(value)
  expect(result).toBeDefined()
  expect(result?.hue).toBeCloseTo(expected.hue)
  expect(result?.saturation).toBeCloseTo(expected.saturation)
  expect(result?.selectedColor).toBe(expected.selectedColor)
  expect(result?.value).toBeCloseTo(expected.value)
})

test.each(['', '#12', '#ggg', 'rgb(1, 2)', 'rgb(nope, 2, 3)', 'hsl(120, 50, 50%)', 'currentColor'])('rejects %s', (value) => {
  expect(ParseColor.parseColor(value)).toBeUndefined()
})
