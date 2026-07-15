import { ViewletCommand } from '@lvce-editor/constants'
import type { ColorPickerState } from '../ColorPickerState/ColorPickerState.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const renderFocus = (oldState: ColorPickerState, newState: ColorPickerState): readonly any[] => {
  return [ViewletCommand.FocusSelector, newState.uid, `.${ClassNames.ColorPickerSliderWrapper}`]
}
