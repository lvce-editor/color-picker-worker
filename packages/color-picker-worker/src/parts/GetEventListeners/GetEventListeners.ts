import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleSliderPointerDown,
      params: ['handleSliderPointerDown', 'event.clientX', 'event.clientY'],
    },
    {
      name: DomEventListenerFunctions.HandleSliderPointerMove,
      params: ['handleSliderPointerMove', 'event.clientX', 'event.clientY'],
    },
  ]
}
