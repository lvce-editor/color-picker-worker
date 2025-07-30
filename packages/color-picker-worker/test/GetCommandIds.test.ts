import { test, expect } from '@jest/globals'
import * as GetCommandIds from '../src/parts/GetCommandIds/GetCommandIds.ts'

test('getCommandIds', () => {
  const result: readonly string[] = GetCommandIds.getCommandIds()
  expect(result).toBeDefined()
})
