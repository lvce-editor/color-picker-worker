import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.typing-closes'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()
  
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()

  // act - type in editor
  const editorElement = Locator('.Editor')
  await editorElement.click({})
  await Editor.type('#00ff00')

  // assert
  await expect(colorPicker).toBeHidden()
  await Editor.shouldHaveText('#00ff00')
}
