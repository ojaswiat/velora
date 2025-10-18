
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {}
}

/** client **/
import { _replaceAppConfig } from '#app/config'

// Vite - webpack is handled directly in #app/config
if (import.meta.dev && !import.meta.nitro && import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    _replaceAppConfig(newModule.default)
  })
}
/** client-end **/

import cfg0 from "/Users/ojaswi/Ojaswi/projects/velora/apps/auth/.playground/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
