import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.window-resize'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()
  
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()

  // act - simulate window resize
  const viewport = { width: 800, height: 600 }
  await Main.setViewportSize(viewport.width, viewport.height)
  
  // Resize again
  const viewport2 = { width: 1200, height: 800 }
  await Main.setViewportSize(viewport2.width, viewport2.height)

  // assert - color picker should still be visible and properly positioned
  await expect(colorPicker).toBeVisible()
  
  // Close and verify functionality still works
  const editorElement = Locator('.Editor')
  await editorElement.hover()
  await editorElement.click({ button: 'middle' })
  
  await expect(colorPicker).toBeHidden()
  await Editor.shouldHaveText('#ff0000')
}
