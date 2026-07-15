import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.invalid-color'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, 'invalid-color')
  await Main.openUri(`${tmpDir}/file.txt`)

  // act - try to open color picker on invalid color
  await Editor.openColorPicker()

  // assert - color picker should still open but handle invalid input gracefully
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()
  
  // Close color picker
  const editorElement = Locator('.Editor')
  await editorElement.hover()
  await editorElement.click({ button: 'middle' })
  
  // Editor should still have the original text
  await Editor.shouldHaveText('invalid-color')
}
