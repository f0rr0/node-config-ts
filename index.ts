/**
 * Created by tushar on 30/12/17.
 */

import {mergeAllConfigs} from './src/mergeAllConfigs'
export interface Config {}
export const config = mergeAllConfigs(process) as Config
