import { expect, test } from '@jest/globals'
import * as ColorPickerStates from '../src/parts/ColorPickerStates/ColorPickerStates.ts'
import * as Create from '../src/parts/Create/Create.ts'
import * as HandleCloseButton from '../src/parts/HandleCloseButton/HandleCloseButton.ts'

test('handleCloseButton', () => {
  const uid = 1
  Create.create(uid, 0, 0, 100, 100, 0)
  
  // Verify state exists before closing
  const { newState } = ColorPickerStates.get(uid)
  expect(newState.uid).toBe(uid)
  
  HandleCloseButton.handleCloseButton(uid)
  
  // After dispose, the state should be cleared
  const disposedState = ColorPickerStates.get(uid)
  expect(disposedState).toBeUndefined()
})
