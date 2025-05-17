import * as DiffBounds from '../DiffBounds/DiffBounds.ts'
import * as DiffCss from '../DiffCss/DiffCss.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const modules = [DiffItems.isEqual, DiffBounds.isEqual, DiffCss.isEqual]

export const numbers = [DiffType.RenderItems, DiffType.RenderBounds, DiffType.RenderCss]
