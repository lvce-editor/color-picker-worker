import { test, expect, jest } from '@jest/globals'
import * as Terminate from '../src/parts/Terminate/Terminate.ts'

test('terminate', () => {
  const mockClose: jest.Mock = jest.fn()
  globalThis.close = mockClose
  Terminate.terminate()
  expect(mockClose).toHaveBeenCalled()
})
