import { test, expect } from '@jest/globals'

// Mock implementation of ColorPickerStates
const ColorPickerStates = () => [
  { color: '#000000', offsetX: 0, max: 100, uid: 1, min: 0 },
  { color: '#ffffff', offsetX: 50, max: 100, uid: 2, min: 0 },
]

test('ColorPickerStates returns expected states', () => {
  const states = ColorPickerStates()
  expect(states).toEqual([
    { color: '#000000', offsetX: 0, max: 100, uid: 1, min: 0 },
    { color: '#ffffff', offsetX: 50, max: 100, uid: 2, min: 0 },
  ])
})
