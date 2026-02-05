import * as DiffBounds from '../DiffBounds/DiffBounds.ts'
import * as DiffCloseButton from '../DiffCloseButton/DiffCloseButton.ts'
import * as DiffCss from '../DiffCss/DiffCss.ts'
import * as DiffEventListeners from '../DiffEventListeners/DiffEventListeners.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffParentUid from '../DiffParentUid/DiffParentUid.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const modules = [DiffEventListeners.isEqual, DiffItems.isEqual, DiffBounds.isEqual, DiffCss.isEqual, DiffParentUid.isEqual, DiffCloseButton.isEqual]

export const numbers = [DiffType.RenderEventListeners, DiffType.RenderItems, DiffType.RenderBounds, DiffType.RenderCss, DiffType.RenderUid, DiffType.RenderCloseButton]
