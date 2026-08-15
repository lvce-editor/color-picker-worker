export const generateCss = (offsetX: number, color: string, colorAreaOffsetX: number, colorAreaOffsetY: number): string => {
  const rules = [
    `--ColorPickerOffsetX: ${offsetX}px;`,
    `--ColorPickerColor: ${color};`,
    `--ColorPickerColorAreaOffsetX: ${colorAreaOffsetX}px;`,
    `--ColorPickerColorAreaOffsetY: ${colorAreaOffsetY}px;`,
  ]
  const rulesString = rules.join('\n')
  const css = `:root { ${rulesString} }`
  return css
}
