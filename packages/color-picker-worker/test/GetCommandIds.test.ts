import { test, expect } from '@jest/globals'
import { getCommandIds } from '../src/parts/GetCommandIds/GetCommandIds.ts'

test('getCommandIds', () => {
  const result = getCommandIds()
  expect(result).toEqual(['handleSliderPointerDown', 'handleSliderPointerMove'])
})
