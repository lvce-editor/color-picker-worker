import assert from 'node:assert/strict'
import { test } from 'node:test'
import { replaceColorPickerWorkerUrl } from '../src/replaceColorPickerWorkerUrl.js'

const initializer = `colorPickerWorkerUrl = getRuntimeWorkerUrl(
      "develop.colorPickerWorkerPath",
      \`\${assetDir}/packages/renderer-worker/node_modules/@lvce-editor/color-picker-worker/dist/colorPickerWorkerMain.js\`
    );`

test('routes the color-picker worker to the owned bundle and preserves other code', () => {
  const source = `before\n${initializer}\nafter`
  const expression = JSON.stringify('/remote/task/colorPickerWorkerMain.js')
  const patched = replaceColorPickerWorkerUrl(source, expression)
  assert.equal(patched, `before\ncolorPickerWorkerUrl = ${expression};\nafter`)
  assert.equal(replaceColorPickerWorkerUrl(patched, expression), patched)
})

test('rejects absent, changed, or duplicate runtime initializers', () => {
  for (const source of ['', initializer.replace('develop.colorPickerWorkerPath', 'develop.otherWorkerPath'), initializer + initializer]) {
    assert.throws(() => replaceColorPickerWorkerUrl(source, '"/remote/worker.js"'), /Expected exactly one/)
  }
})
