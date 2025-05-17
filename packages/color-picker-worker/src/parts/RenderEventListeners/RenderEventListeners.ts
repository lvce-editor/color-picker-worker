import { getEventListeners } from '../GetEventListeners/GetEventListeners.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderEventListeners = (): readonly any[] => {
  const eventListeners = getEventListeners()
  return [RenderMethod.SetEventListeners, eventListeners]
}
