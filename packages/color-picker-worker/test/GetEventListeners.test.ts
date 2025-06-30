import { expect, test } from '@jest/globals'
import * as GetEventListeners from '../src/parts/GetEventListeners/GetEventListeners.ts'
import * as WidgetId from '../src/parts/WidgetId/WidgetId.ts'

test('getEventListeners returns correct event listeners for ColorPicker', () => {
  const uid: number = 123
  const result = GetEventListeners.getEventListeners(uid, WidgetId.ColorPicker)
  expect(result).toBeDefined()
})
