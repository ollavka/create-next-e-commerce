import type { Access, AccessArgs } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'
import type { User } from 'cms-types'

export const isAdminOrLoggedIn: Access = ({ req }: AccessArgs<User>) => {
  if (checkRole(['admin'], req.user)) {
    return true
  }

  return !!req.user
}
