import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.escape-close'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()
  
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()

  // act - simulate escape key by clicking outside
  const editorElement = Locator('.Editor')
  await editorElement.hover()
  await editorElement.click({ button: 'middle' })

  // assert
  await expect(colorPicker).toBeHidden()
  await Editor.shouldHaveText('#ff0000')
}
