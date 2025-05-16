export const getNewColor = (x: number, max: number): string => {
  const percent = x / max
  const hue = percent * 360
  const newColor = `hsl(${hue}, 100%, 50%)`
  return newColor
}
