import type { FlatConfigComposer } from "../../../../node_modules/.bun/eslint-flat-config-utils@2.1.4/node_modules/eslint-flat-config-utils/dist/index.mjs"
import { defineFlatConfigs } from "../../../../node_modules/.bun/@nuxt+eslint-config@1.9.0+3ba1556ff89e98de/node_modules/@nuxt/eslint-config/dist/flat.mjs"
import type { NuxtESLintConfigOptionsResolved } from "../../../../node_modules/.bun/@nuxt+eslint-config@1.9.0+3ba1556ff89e98de/node_modules/@nuxt/eslint-config/dist/flat.mjs"

declare const configs: FlatConfigComposer
declare const options: NuxtESLintConfigOptionsResolved
declare const withNuxt: typeof defineFlatConfigs
export default withNuxt
export { withNuxt, defineFlatConfigs, configs, options }