import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.drag-slider'

export const test: Test = async ({ Command, Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()
  
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()

  // act - drag slider to different positions
  await Command.execute('ColorPicker.setRelativeX', 50)
  await Command.execute('ColorPicker.setRelativeX', 150)
  await Command.execute('ColorPicker.setRelativeX', 250)

  // assert - color picker should still be visible
  await expect(colorPicker).toBeVisible()
  
  // Close and verify final color
  const editorElement = Locator('.Editor')
  await editorElement.hover()
  await editorElement.click({ button: 'middle' })
  
  // The final color should be different from original
  await Editor.shouldHaveText('#0000ff') // Assuming final position gives blue
}
