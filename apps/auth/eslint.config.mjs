import baseConfig from "../../eslint.config.mjs";
import withNuxt from "./.playground/.nuxt/eslint.config.mjs";
// https://eslint.nuxt.com/packages/module
// Use append instead of prepend to avoid plugin conflicts
// baseConfig has standalone: false to allow merging
export default withNuxt(baseConfig);
