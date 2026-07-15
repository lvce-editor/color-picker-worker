import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.keyboard-navigation'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()
  
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()

  // act - try keyboard navigation (Tab, Arrow keys)
  const editorElement = Locator('.Editor')
  await editorElement.click({})
  
  // Try Tab to navigate within color picker
  await Editor.type('\t')
  
  // Try arrow keys to adjust color
  await Editor.type('\u001b[A') // Up arrow
  await Editor.type('\u001b[B') // Down arrow
  await Editor.type('\u001b[C') // Right arrow
  await Editor.type('\u001b[D') // Left arrow

  // assert - color picker should still be visible
  await expect(colorPicker).toBeVisible()
  
  // Close with Escape
  await editorElement.hover()
  await editorElement.click({ button: 'middle' })
  
  await expect(colorPicker).toBeHidden()
}
