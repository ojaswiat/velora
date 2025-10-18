import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);
export default defineNuxtConfig({
    alias: {
        "#velora-auth": resolve("."),
    },
    compatibilityDate: "2025-10-17",
    devtools: { enabled: true },
    extends: [resolve("../../layers/base")],
});
