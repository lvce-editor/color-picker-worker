import { expect, test } from '@jest/globals'
import { create } from '../src/parts/Create/Create.ts'

test('create - basic', () => {
  const uid = 1
  const x = 100
  const y = 200
  const width = 300
  const height = 400
  const parentUid = 0

  const state = create(uid, x, y, width, height, parentUid)

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
