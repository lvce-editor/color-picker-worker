import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.open-twice'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)

  // act
  await Editor.openColorPicker()
  await Editor.openColorPicker()

  // assert
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()
  await expect(colorPicker).toHaveCount(1)
}
