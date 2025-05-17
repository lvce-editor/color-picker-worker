import * as ColorPickerStates from '../ColorPickerStates/ColorPickerStates.ts'
import * as Diff from '../Diff/Diff.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { oldState, newState } = ColorPickerStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  console.log({ oldState, newState, diffResult })
  return diffResult
}
