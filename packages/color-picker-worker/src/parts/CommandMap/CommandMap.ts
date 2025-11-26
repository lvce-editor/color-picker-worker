import { terminate } from '@lvce-editor/viewlet-registry'
import * as WrapCommand from '../ColorPickerStates/ColorPickerStates.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import { handleContextMenu } from '../HandleContextMenu/HandleContextMenu.ts'
import { handleSliderPointerDown } from '../HandleSliderPointerDown/HandleSliderPointerDown.ts'
import { handleSliderPointerMove } from '../HandleSliderPointerMove/HandleSliderPointerMove.ts'
import { handleSliderPointerUp } from '../HandleSliderPointerUp/HandleSliderPointerUp.ts'
import * as ColorPicker from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'

export const commandMap = {
  'ColorPicker.create': Create.create,
  'ColorPicker.diff2': Diff2.diff2,
  'ColorPicker.getCommandIds': WrapCommand.getCommandIds,
  'ColorPicker.handleSliderPointerDown': WrapCommand.wrapCommand(handleSliderPointerDown),
  'ColorPicker.handleSliderPointerMove': WrapCommand.wrapCommand(handleSliderPointerMove),
  'ColorPicker.handleSliderPointerUp': WrapCommand.wrapCommand(handleSliderPointerUp),
  'ColorPicker.handleContextMenu': WrapCommand.wrapCommand(handleContextMenu),
  'ColorPicker.loadContent': WrapCommand.wrapCommand(ColorPicker.loadContent),
  'ColorPicker.render2': Render2.render2,
  'ColorPicker.terminate': terminate,
  'ColorPicker.dispose': Dispose.dispose,
}
