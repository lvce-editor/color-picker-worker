const original = `colorPickerWorkerUrl = getRuntimeWorkerUrl(
      "develop.colorPickerWorkerPath",
      \`\${assetDir}/packages/renderer-worker/node_modules/@lvce-editor/color-picker-worker/dist/colorPickerWorkerMain.js\`
    );`

export const replaceColorPickerWorkerUrl = (content, urlExpression) => {
  const replacement = `colorPickerWorkerUrl = ${urlExpression};`
  if (content.includes(replacement)) return content
  if (content.split(original).length !== 2) {
    throw new Error('Expected exactly one color-picker worker URL initializer')
  }
  return content.replace(original, replacement)
}
