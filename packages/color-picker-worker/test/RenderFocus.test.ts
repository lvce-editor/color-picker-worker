import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderFocus from '../src/parts/RenderFocus/RenderFocus.ts'

test('focuses the color picker', () => {
  const oldState = CreateDefaultState.createDefaultState()
  const newState = { ...oldState, focused: true, uid: 42 }
  expect(RenderFocus.renderFocus(oldState, newState)).toEqual([ViewletCommand.FocusSelector, 42, '.ColorPickerSliderWrapper'])
})
