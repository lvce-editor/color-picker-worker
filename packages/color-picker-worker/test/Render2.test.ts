import { expect, test } from '@jest/globals'
import type { ColorPickerState } from '../src/parts/ColorPickerState/ColorPickerState.ts'
import * as ColorPickerStates from '../src/parts/ColorPickerStates/ColorPickerStates.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as Render2 from '../src/parts/Render2/Render2.ts'

test('render2 returns array of commands', () => {
  // Arrange
  const uid: number = 123
  const diffResult: number[] = [DiffType.RenderItems, DiffType.RenderBounds]

  // Create test states
  const mockOldState: ColorPickerState = CreateDefaultState.createDefaultState()
  const mockNewState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    color: 'hsl(180, 100%, 50%)',
    height: 60,
    offsetX: 5,
    version: 2,
    width: 110,
    x: 15,
    y: 25,
  }

  // Set up the states
  ColorPickerStates.set(uid, mockOldState, mockNewState)

  // Act
  const result = Render2.render2(uid, diffResult)

  // Assert
  expect(Array.isArray(result)).toBe(true)
})

test('render2 processes different diff results', () => {
  // Arrange
  const uid: number = 456
  const diffResult: number[] = [DiffType.RenderCss, DiffType.RenderEventListeners]

  // Create test states
  const mockOldState: ColorPickerState = CreateDefaultState.createDefaultState()
  const mockNewState: ColorPickerState = {
    ...CreateDefaultState.createDefaultState(),
    color: 'hsl(180, 100%, 50%)',
    height: 60,
    offsetX: 5,
    version: 2,
    width: 110,
    x: 15,
    y: 25,
  }

  // Set up the states
  ColorPickerStates.set(uid, mockOldState, mockNewState)

  // Act
  const result = Render2.render2(uid, diffResult)

  // Assert
  expect(Array.isArray(result)).toBe(true)
})
