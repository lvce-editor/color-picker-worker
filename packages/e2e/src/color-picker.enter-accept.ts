import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.enter-accept'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()
  
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()

  // act
  const colorPickerElement = Locator('.ColorPicker')
  await colorPickerElement.press('Enter')

  // assert
  await expect(colorPicker).toBeHidden()
  await Editor.shouldHaveText('#ff0000')
}
