import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    alias: {
        "#auth": resolve("."),
    },
    compatibilityDate: "2025-10-17",
    components: [
        {
            path: resolve("./app/components"),
            pathPrefix: false,
        },
    ],
    devtools: { enabled: true },

    extends: [resolve("../../layers/base")],

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
});
