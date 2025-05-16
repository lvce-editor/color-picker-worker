import * as Create from '../Create/Create.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'

export const commandMap = {
  'ColorPicker.create': Create.create,
  'ColorPicker.getCommandIds': GetCommandIds.getCommandIds,
}
