import { expect, test } from '@jest/globals'
import { EventExpression } from '@lvce-editor/constants'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetEventListeners from '../src/parts/GetEventListeners/GetEventListeners.ts'
import * as WidgetId from '../src/parts/WidgetId/WidgetId.ts'

test('getEventListeners returns correct event listeners for ColorPicker', () => {
  const uid: number = 123
  const result = GetEventListeners.getEventListeners(uid, WidgetId.ColorPicker)
  expect(result).toEqual(
    expect.arrayContaining([
      {
        name: DomEventListenerFunctions.HandleColorAreaPointerDown,
        params: [
          'executeWidgetCommand',
          'ColorPicker',
          'ColorPicker.handleColorAreaPointerDown',
          uid,
          WidgetId.ColorPicker,
          EventExpression.ClientX,
          EventExpression.ClientY,
        ],
        trackPointerEvents: [DomEventListenerFunctions.HandleColorAreaPointerMove, DomEventListenerFunctions.HandleColorAreaPointerUp],
      },
      {
        name: DomEventListenerFunctions.HandleColorAreaPointerMove,
        params: [
          'executeWidgetCommand',
          'ColorPicker',
          'ColorPicker.handleColorAreaPointerMove',
          uid,
          WidgetId.ColorPicker,
          EventExpression.ClientX,
          EventExpression.ClientY,
        ],
      },
      {
        name: DomEventListenerFunctions.HandleColorAreaPointerUp,
        params: ['executeWidgetCommand', 'ColorPicker', 'ColorPicker.handleColorAreaPointerUp', uid, WidgetId.ColorPicker],
      },
      {
        name: DomEventListenerFunctions.HandleSliderKeyDown,
        params: ['executeWidgetCommand', 'ColorPicker', 'ColorPicker.handleSliderKeyDown', uid, WidgetId.ColorPicker, EventExpression.Key],
      },
    ]),
  )
  expect(new Set(result.map(({ name }) => name)).size).toBe(result.length)
})
