import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.change-color'

export const test: Test = async ({ Command, Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()
  
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()

  // act - change color by moving slider
  await Command.execute('ColorPicker.setRelativeX', 100)

  // assert - color picker should still be visible
  await expect(colorPicker).toBeVisible()
  
  // Close color picker to apply the change
  const editorElement = Locator('.Editor')
  await editorElement.hover()
  await editorElement.click({ button: 'middle' })
  
  // Verify the color changed in editor
  await Editor.shouldHaveText('#00ff00') // Assuming setRelativeX(100) changes to green
}
