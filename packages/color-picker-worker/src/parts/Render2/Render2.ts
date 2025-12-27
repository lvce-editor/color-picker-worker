import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as ColorPickerStates from '../ColorPickerStates/ColorPickerStates.ts'

export const render2 = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { newState, oldState } = ColorPickerStates.get(uid)
  ColorPickerStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  return commands
}
