import { join } from 'node:path'
import { root } from './root.ts'

export const threshold = 370_000

export const workerPath = join(root, '.tmp/dist/dist/colorPickerWorkerMain.js')

export const playwrightPath = new URL('../../e2e/node_modules/playwright/index.mjs', import.meta.url).toString()
