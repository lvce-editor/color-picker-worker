import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.quick-open-close'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)

  // act - quickly open and close color picker multiple times
  for (let i = 0; i < 5; i++) {
    await Editor.openColorPicker()
    
    const colorPicker = Locator('.ColorPicker')
    await expect(colorPicker).toBeVisible()
    
    // Close quickly
    const editorElement = Locator('.Editor')
    await editorElement.hover()
    await editorElement.click({ button: 'middle' })
    
    await expect(colorPicker).toBeHidden()
  }

  // assert - final state should be clean
  await Editor.shouldHaveText('#ff0000')
  
  const colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeHidden()
}
