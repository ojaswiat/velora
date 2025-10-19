import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    alias: {
        "#base": resolve("."),
    },
    compatibilityDate: "2025-10-17",

    devtools: { enabled: true },

    imports: {
        dirs: [
            resolve("./app/libs/**/*"),
            resolve("./app/services/**"),
            resolve("./app/stores/**"),
            resolve("./app/components/**"),
            resolve("./app/middleware/**"),
            resolve("./app/utils/**"),
        ],
    },

    // Modules
    modules: [
        "@unocss/nuxt",
        "@pinia/nuxt",

        [
            "@nuxt/eslint",
            {
                config: {
                    standalone: false,
                },
            },
        ],
    ],

    // Module configurations
    unocss: {
        nuxtLayers: true,
    },

});
