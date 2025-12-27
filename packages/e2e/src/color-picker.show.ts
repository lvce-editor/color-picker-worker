import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.show'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, 'abc')
  await Main.openUri(`${tmpDir}/file.txt`)

  // act
  await Editor.openColorPicker()

  // assert
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()
}
