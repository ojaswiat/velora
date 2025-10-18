import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
    eslint: {
        config: {
            // Use the generated ESLint config for lint root project as well
            rootDir: fileURLToPath(new URL("..", import.meta.url)),
        },
    },
    extends: [".."],
    modules: ["@nuxt/eslint"],
});
