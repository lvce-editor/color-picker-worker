import type { Renderer } from '../Renderer/Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderBounds from '../RenderBounds/RenderBounds.ts'
import * as RenderColor from '../RenderColor/RenderColor.ts'
import * as RenderItems from '../RenderItems/RenderItems.ts'
import * as RenderOffsetX from '../RenderOffsetX/RenderOffsetX.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderItems:
      return RenderItems.renderItems
    case DiffType.RenderColor:
      return RenderColor.renderColor
    case DiffType.RenderBounds:
      return RenderBounds.renderBounds
    case DiffType.RenderOffsetX:
      return RenderOffsetX.renderOffsetX
    default:
      throw new Error('unknown renderer')
  }
}
