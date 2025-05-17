import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getEventListeners = (uid: number, widgetId: number): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleSliderPointerDown,
      params: ['executeWidgetCommand', 'ColorPicker', 'handleSliderPointerDown', uid, widgetId, 'event.clientX', 'event.clientY'],
    },
    {
      name: DomEventListenerFunctions.HandleSliderPointerMove,
      params: ['executeWidgetCommand', 'ColorPicker', 'handleSliderPointerMove', uid, widgetId, 'event.clientX', 'event.clientY'],
    },
  ]
}
