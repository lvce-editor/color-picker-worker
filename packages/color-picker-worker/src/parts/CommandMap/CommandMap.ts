import * as ColorPicker from '../ColorPicker/ColorPicker.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import { handleSliderPointerDown } from '../HandleSliderPointerDown/HandleSliderPointerDown.ts'
import { handleSliderPointerMove } from '../HandleSliderPointerMove/HandleSliderPointerMove.ts'

export const commandMap = {
  'ColorPicker.create': Create.create,
  'ColorPicker.getCommandIds': GetCommandIds.getCommandIds,
  'ColorPicker.handleSliderPointerDown': handleSliderPointerDown,
  'ColorPicker.handleSliderPointerMove': handleSliderPointerMove,
  'ColorPicker.loadContent': ColorPicker.loadContent,
  'ColorPicker.diff2': Diff2.diff2,
}
