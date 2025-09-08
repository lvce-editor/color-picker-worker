import { EventExpression } from '@lvce-editor/constants'
import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getEventListeners = (uid: number, widgetId: number): readonly DomEventListener[] => {
  // TODO uncomplicate event listeners
  return [
    {
      name: DomEventListenerFunctions.HandleSliderPointerDown,
      params: [
        'executeWidgetCommand',
        'ColorPicker',
        'ColorPicker.handleSliderPointerDown',
        uid,
        widgetId,
        EventExpression.ClientX,
        EventExpression.ClientY,
      ],
      trackPointerEvents: [DomEventListenerFunctions.HandleSliderPointerMove, DomEventListenerFunctions.HandleSliderPointerUp],
    },
    {
      name: DomEventListenerFunctions.HandleSliderPointerMove,
      params: [
        'executeWidgetCommand',
        'ColorPicker',
        'ColorPicker.handleSliderPointerMove',
        uid,
        widgetId,
        EventExpression.ClientX,
        EventExpression.ClientY,
      ],
    },
    {
      name: DomEventListenerFunctions.HandleSliderPointerUp,
      params: ['executeWidgetCommand', 'ColorPicker', 'ColorPicker.handleSliderPointerUp', uid, widgetId],
    },
  ]
}
