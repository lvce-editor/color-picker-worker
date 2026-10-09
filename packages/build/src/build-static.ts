import { cp, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { root } from './root.ts'

const sharedProcess = await import('@lvce-editor/shared-process')

process.env.PATH_PREFIX = '/color-picker-worker'
const { commitHash } = await sharedProcess.exportStatic({
  root,
  extensionPath: '',
})

const rendererWorkerPath = join(root, 'dist', commitHash, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')

export const getRemoteUrl = (path: string): string => {
  const url = pathToFileURL(path).toString().slice(8)
  return `/remote/${url}`
}

const content = await readFile(rendererWorkerPath, 'utf8')
const workerPath = join(root, '.tmp/dist/dist/colorPickerWorkerMain.js')
const remoteUrl = getRemoteUrl(workerPath)

const occurrence = `colorPickerWorkerUrl = ${JSON.stringify(remoteUrl)};`
const replacement = 'colorPickerWorkerUrl = `${assetDir}/packages/color-picker-worker/dist/colorPickerWorkerMain.js`;'
if (content.split(occurrence).length !== 2) {
  throw new Error('Expected exactly one development color picker worker URL')
}
const newContent = content.replace(occurrence, replacement)
await writeFile(rendererWorkerPath, newContent)

await cp(workerPath, join(root, 'dist', commitHash, 'packages', 'color-picker-worker', 'dist', 'colorPickerWorkerMain.js'))

await cp(join(root, 'dist'), join(root, '.tmp', 'static'), { recursive: true })
