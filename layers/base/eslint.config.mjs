import baseConfig from "../../eslint.config.mjs";
import withNuxt from "./.nuxt/eslint.config.mjs";

// https://eslint.nuxt.com/packages/module
export default withNuxt().prepend(baseConfig);
