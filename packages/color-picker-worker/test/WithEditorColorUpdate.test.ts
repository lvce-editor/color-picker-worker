import { expect, jest, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as WithEditorColorUpdate from '../src/parts/WithEditorColorUpdate/WithEditorColorUpdate.ts'

test('sends a changed color to the owning editor', async () => {
  const state = {
    ...CreateDefaultState.createDefaultState(),
    parentUid: 42,
    selectedColor: '#000000',
  }
  const update = jest.fn<(uid: number, color: string) => Promise<void>>(() => Promise.resolve())
  const command = WithEditorColorUpdate.withEditorColorUpdate((oldState) => ({ ...oldState, selectedColor: '#ff0000' }), update)
  await expect(command(state)).resolves.toMatchObject({ selectedColor: '#ff0000' })
  expect(update).toHaveBeenCalledWith(42, '#ff0000')
})

test('does not send an unchanged color', async () => {
  const state = CreateDefaultState.createDefaultState()
  const update = jest.fn<(uid: number, color: string) => Promise<void>>(() => Promise.resolve())
  const command = WithEditorColorUpdate.withEditorColorUpdate((oldState) => oldState, update)
  await command(state)
  expect(update).not.toHaveBeenCalled()
})

test('waits for the editor update to finish', async () => {
  const state = {
    ...CreateDefaultState.createDefaultState(),
    parentUid: 42,
    selectedColor: '#000000',
  }
  const { promise, resolve } = Promise.withResolvers<void>()
  const update = jest.fn<(uid: number, color: string) => Promise<void>>(() => promise)
  const command = WithEditorColorUpdate.withEditorColorUpdate((oldState) => ({ ...oldState, selectedColor: '#ff0000' }), update)

  const result = command(state)
  await Promise.resolve()
  expect(update).toHaveBeenCalledWith(42, '#ff0000')
  resolve()
  await expect(result).resolves.toMatchObject({ selectedColor: '#ff0000' })
})
