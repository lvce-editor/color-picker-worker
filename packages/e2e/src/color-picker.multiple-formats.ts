import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.multiple-formats'

export const test: Test = async ({ Editor, expect, FileSystem, Locator, Main }) => {
  // Test different color formats
  
  // arrange - hex format
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, '#ff0000')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()
  
  let colorPicker = Locator('.ColorPicker')
  await expect(colorPicker).toBeVisible()
  
  // act - close and change to rgb format
  const editorElement = Locator('.Editor')
  await editorElement.hover()
  await editorElement.click({ button: 'middle' })
  
  await Editor.shouldHaveText('#ff0000')
  
  // arrange - rgb format
  await Editor.type('rgb(255, 0, 0)')
  await Editor.openColorPicker()
  
  // assert - should still open with rgb format
  await expect(colorPicker).toBeVisible()
  
  // act - close
  await editorElement.hover()
  await editorElement.click({ button: 'middle' })
  
  await Editor.shouldHaveText('rgb(255, 0, 0)')
  
  // arrange - hsl format
  await Editor.type('hsl(0, 100%, 50%)')
  await Editor.openColorPicker()
  
  // assert - should still open with hsl format
  await expect(colorPicker).toBeVisible()
}
