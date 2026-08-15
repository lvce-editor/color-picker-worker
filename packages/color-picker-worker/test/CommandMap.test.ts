import { expect, test } from '@jest/globals'
import * as CommandMap from '../src/parts/CommandMap/CommandMap.ts'

test('commandMap', () => {
  expect(CommandMap.commandMap).toEqual(
    expect.objectContaining({
      'ColorPicker.handleColorAreaPointerDown': expect.any(Function),
      'ColorPicker.handleColorAreaPointerMove': expect.any(Function),
      'ColorPicker.handleColorAreaPointerUp': expect.any(Function),
      'ColorPicker.handleSliderKeyDown': expect.any(Function),
    }),
  )
})
