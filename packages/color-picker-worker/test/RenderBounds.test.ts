import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderBounds from '../src/parts/RenderBounds/RenderBounds.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'

test('renderBounds returns correct array structure', () => {
  // Arrange
  const oldState: ColorPickerState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    color: 'hsl(180, 100%, 50%)',
    height: 60,
    offsetX: 5,
    version: 2,
    width: 110,
    x: 15,
    y: 25,
  }

  // Act
  const result = RenderBounds.renderBounds(oldState, newState)

  // Assert
  expect(result).toHaveLength(6)
  expect(result[0]).toBe(RenderMethod.SetBounds)
  expect(result[1]).toBe(0) // uid
  expect(result[2]).toBe(15) // x
  expect(result[3]).toBe(25) // y
  expect(result[4]).toBe(110) // width
  expect(result[5]).toBe(60) // height
})

test('renderBounds uses newState bounds values', () => {
  // Arrange
  const oldState: ColorPickerState = CreateDefaultState.createDefaultState()
  const newState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    color: 'hsl(180, 100%, 50%)',
    height: 400,
    offsetX: 5,
    version: 2,
    width: 300,
    x: 100,
    y: 200,
  }

  // Act
  const result = RenderBounds.renderBounds(oldState, newState)

  // Assert
  expect(result[1]).toBe(0) // uid from newState
  expect(result[2]).toBe(100) // x from newState
  expect(result[3]).toBe(200) // y from newState
  expect(result[4]).toBe(300) // width from newState
  expect(result[5]).toBe(400) // height from newState
})

test('renderBounds ignores oldState bounds values', () => {
  // Arrange
  const oldState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    height: 999,
    width: 999,
    x: 999,
    y: 999,
  }
  const newState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    color: 'hsl(180, 100%, 50%)',
    height: 4,
    offsetX: 5,
    version: 2,
    width: 3,
    x: 1,
    y: 2,
  }

  // Act
  const result = RenderBounds.renderBounds(oldState, newState)

  // Assert
  expect(result[2]).toBe(1) // x from newState, not oldState
  expect(result[3]).toBe(2) // y from newState, not oldState
  expect(result[4]).toBe(3) // width from newState, not oldState
  expect(result[5]).toBe(4) // height from newState, not oldState
})
