import { test, expect } from '@jest/globals'

// Mock implementation of assert
const assert = (condition: boolean, message: string) => {
  if (!condition) {
    throw new Error(message)
  }
}

test('assert throws error when condition is false', () => {
  expect(() => assert(false, 'This should throw')).toThrow('This should throw')
})

test('assert does not throw when condition is true', () => {
  expect(() => assert(true, 'This should not throw')).not.toThrow()
})
