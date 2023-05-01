import { Adapter } from '@lib/adapter'

import * as ethereum from './ethereum'

const adapter: Adapter = {
  id: 'ribbon-finance',
  ethereum,
}

/**
 *  TODO:
 *  - Logic to get rewards from farming part
 *  - Logic on Avalanche chain
 */

export default adapter
