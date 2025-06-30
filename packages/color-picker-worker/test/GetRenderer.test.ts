import { test, expect } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import { getRenderer } from '../src/parts/GetRenderer/GetRenderer.ts'
import * as RenderBounds from '../src/parts/RenderBounds/RenderBounds.ts'
import * as RenderCss from '../src/parts/RenderCss/RenderCss.ts'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.ts'
import * as RenderItems from '../src/parts/RenderItems/RenderItems.ts'
import * as RenderUid from '../src/parts/RenderUid/RenderUid.ts'

test('getRenderer with RenderItems', () => {
  const renderer = getRenderer(DiffType.RenderItems)
  expect(renderer).toBe(RenderItems.renderItems)
})

test('getRenderer with RenderBounds', () => {
  const renderer = getRenderer(DiffType.RenderBounds)
  expect(renderer).toBe(RenderBounds.renderBounds)
})

test('getRenderer with RenderCss', () => {
  const renderer = getRenderer(DiffType.RenderCss)
  expect(renderer).toBe(RenderCss.renderCss)
})

test('getRenderer with RenderEventListeners', () => {
  const renderer = getRenderer(DiffType.RenderEventListeners)
  expect(renderer).toBe(RenderEventListeners.renderEventListeners)
})

test('getRenderer with RenderUid', () => {
  const renderer = getRenderer(DiffType.RenderUid)
  expect(renderer).toBe(RenderUid.renderUid)
})

test('getRenderer with unknown type', () => {
  expect(() => getRenderer(999)).toThrow('unknown renderer')
})
