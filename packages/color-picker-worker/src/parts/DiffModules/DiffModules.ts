import * as DiffBounds from '../DiffBounds/DiffBounds.ts'
import * as DiffColor from '../DiffColor/DiffColor.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffOffsetX from '../DiffOffsetX/DiffOffsetX.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const modules = [DiffItems.isEqual, DiffBounds.isEqual, DiffColor.isEqual, DiffOffsetX.isEqual]

export const numbers = [DiffType.RenderItems, DiffType.RenderBounds, DiffType.RenderColor, DiffType.RenderOffsetX]
