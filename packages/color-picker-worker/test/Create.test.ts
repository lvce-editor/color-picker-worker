<<<<<<< HEAD
import { test, expect } from '@jest/globals'
import { create } from '../src/parts/Create/Create.js'

test('create returns expected result', () => {
  const result = create(1, 0, 0, 100, 100)
  expect(result).toEqual({
    uid: 1,
    color: '',
    height: 100,
    max: 0,
    min: 0,
    offsetX: 0,
    width: 0,
    x: 0,
    y: 0,
=======
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
>>>>>>> origin/main
  })
})
