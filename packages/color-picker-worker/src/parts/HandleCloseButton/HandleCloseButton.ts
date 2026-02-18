import * as Dispose from '../Dispose/Dispose.ts'

export const handleCloseButton = (uid: number): void => {
  Dispose.dispose(uid)
}
