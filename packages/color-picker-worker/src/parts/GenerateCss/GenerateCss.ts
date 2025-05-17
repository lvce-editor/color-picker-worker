export const generateCss = (offsetX: number, color: string): string => {
  const rules = [`--ColorPickerOffsetX: ${offsetX}px;`, `--ColorPickerColor: ${color};`]
  const rulesString = rules.join('\n')
  const css = `:root { ${rulesString} }`
  return css
}
