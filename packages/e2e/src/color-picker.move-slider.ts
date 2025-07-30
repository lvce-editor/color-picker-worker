import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'color-picker.move-slider'

export const skip = 1

export const test: Test = async ({ FileSystem, Main, Editor, Locator, expect, Command }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, 'abc')
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.openColorPicker()

  // act
  await Command.execute('ColorPicker.setRelativeX', 100)

  // assert
  // TODO
  // const colorPicker = Locator('.ColorPicker')
  // await expect(colorPicker).toBeVisible()
}
