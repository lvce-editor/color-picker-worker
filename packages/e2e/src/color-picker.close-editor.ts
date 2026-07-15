import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.close-editor'

export const skip = 1

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, 'abc')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()

  // act
  await Main.closeActiveEditor()

  // assert
  await expect(colorPicker).toBeHidden()
}
