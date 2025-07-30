import { WebWorkerRpcClient } from '@lvce-editor/rpc'
import { registerCommands } from '../ColorPickerStates/ColorPickerStates.ts'
import * as CommandMap from '../CommandMap/CommandMap.ts'
import * as RpcId from '../RpcId/RpcId.ts'
import * as RpcRegistry from '../RpcRegistry/RpcRegistry.ts'

export const listen = async (): Promise<void> => {
  registerCommands(CommandMap.commandMap)
  const rpc = await WebWorkerRpcClient.create({
    commandMap: CommandMap.commandMap,
  })
  RpcRegistry.set(RpcId.RendererWorker, rpc)
}
