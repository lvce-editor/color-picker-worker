import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getEventListeners = (uid: number, widgetId: number): readonly DomEventListener[] => {
  // TODO uncomplicate event listeners
  return [
    {
      name: DomEventListenerFunctions.HandleSliderPointerDown,
      params: ['executeWidgetCommand', 'ColorPicker', 'ColorPicker.handleSliderPointerDown', uid, widgetId, 'event.clientX', 'event.clientY'],
      trackPointerEvents: [DomEventListenerFunctions.HandleSliderPointerMove, DomEventListenerFunctions.HandleSliderPointerUp],
    },
    {
      name: DomEventListenerFunctions.HandleSliderPointerMove,
      params: ['executeWidgetCommand', 'ColorPicker', 'ColorPicker.handleSliderPointerMove', uid, widgetId, 'event.clientX', 'event.clientY'],
    },
    {
      name: DomEventListenerFunctions.HandleSliderPointerUp,
      params: ['executeWidgetCommand', 'ColorPicker', 'ColorPicker.handleSliderPointerUp', uid, widgetId],
    },
  ]
}
