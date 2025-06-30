import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as Create from '../src/parts/Create/Create.ts'

test('create - basic', () => {
  const uid: number = 1
  const x: number = 100
  const y: number = 200
  const width: number = 300
  const height: number = 400
  const parentUid: number = 0

  const state: ColorPickerState = Create.create(uid, x, y, width, height, parentUid)

  expect(state).toEqual({
    uid,
    color: '',
    height,
    max: 0,
    min: 0,
    offsetX: 0,
    width,
    x,
    y,
    version: 0,
    parentUid,
  })
})
