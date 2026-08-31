import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.context-menu'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()
  
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()

  // act - right click on color picker to open context menu
  await colorPicker.click({ button: 'right' })

  // assert - context menu should appear
  const contextMenu = Locator('.ContextMenu')
  await expect(contextMenu).toBeVisible()
}
