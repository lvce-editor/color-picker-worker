import { test, expect } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.ts'
import * as RenderBounds from '../src/parts/RenderBounds/RenderBounds.ts'
import * as RenderCss from '../src/parts/RenderCss/RenderCss.ts'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.ts'
import * as RenderItems from '../src/parts/RenderItems/RenderItems.ts'
import * as RenderUid from '../src/parts/RenderUid/RenderUid.ts'

test('getRenderer with RenderItems', () => {
  const diffType: number = DiffType.RenderItems
  const renderer = GetRenderer.getRenderer(diffType)
  expect(renderer).toBe(RenderItems.renderItems)
})

test('getRenderer with RenderBounds', () => {
  const diffType: number = DiffType.RenderBounds
  const renderer = GetRenderer.getRenderer(diffType)
  expect(renderer).toBe(RenderBounds.renderBounds)
})

test('getRenderer with RenderCss', () => {
  const diffType: number = DiffType.RenderCss
  const renderer = GetRenderer.getRenderer(diffType)
  expect(renderer).toBe(RenderCss.renderCss)
})

test('getRenderer with RenderEventListeners', () => {
  const diffType: number = DiffType.RenderEventListeners
  const renderer = GetRenderer.getRenderer(diffType)
  expect(renderer).toBe(RenderEventListeners.renderEventListeners)
})

test('getRenderer with RenderUid', () => {
  const diffType: number = DiffType.RenderUid
  const renderer = GetRenderer.getRenderer(diffType)
  expect(renderer).toBe(RenderUid.renderUid)
})

test('getRenderer with unknown type', () => {
  const unknownType: number = 999
  expect(() => GetRenderer.getRenderer(unknownType)).toThrow('unknown renderer')
})
