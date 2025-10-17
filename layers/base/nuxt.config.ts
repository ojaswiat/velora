import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    devtools: { enabled: true },
    compatibilityDate: "2025-10-17",

    alias: {
        "#velora-base": resolve("."),
    },

    // Modules
    modules: [
        "@unocss/nuxt",
    ],

    // Module configurations
    unocss: {
        nuxtLayers: true,
    },

});
