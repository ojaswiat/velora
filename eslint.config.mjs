// @ts-check
import antfu from "@antfu/eslint-config";
// @ts-ignore -- Missing type declarations
import pluginESx from "eslint-plugin-es-x";
// @ts-ignore -- Missing type declarations
import pluginPromise from "eslint-plugin-promise";
// @ts-ignore -- Missing type declarations
import pluginSecurity from "eslint-plugin-security";
// @ts-ignore -- Missing type declarations
import securityNode from "eslint-plugin-security-node";

// baseConfig: https://github.com/antfu/eslint-config
// Node Config: https://github.com/eslint-community/eslint-plugin-n
// JSON Config: https://github.com/ota-meshi/eslint-plugin-jsonc
export default antfu(
    {
        formatters: {
            /**
             * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
             * By default uses Prettier
             */
            css: true,
            /**
             * Format HTML files
             * By default uses Prettier
             */
            html: true,
            /**
             * Format Markdown files
             * Supports Prettier and dprint
             * By default uses Prettier
             */
            markdown: "prettier",
        },
        // https://eslint.org/
        javascript: {
            overrides: {
                "prefer-const": [
                    "warn",
                    {
                        destructuring: "all",
                    },
                ],
            },
        },
        jsonc: true,
        // https://eslint-plugin-perfectionist.azat.io/
        lessOpinionated: false,
        stylistic: {
            indent: 4,
            overrides: {
                "style/arrow-parens": ["error", "always"],
                "style/brace-style": ["error", "1tbs"],
            },
            quotes: "double",
            semi: true,
        },
        // https://typescript-eslint.io/
        typescript: {
            overrides: {
                "no-undef": "off",
                "ts/consistent-type-definitions": "off",
            },
        },
        // https://unocss.dev/integrations/eslint
        unocss: false,
        vue: {
            overrides: {
                "vue/block-order": ["error", {
                    order: ["template", "script", "style"],
                }],
                "vue/html-closing-bracket-newline": ["error", {
                    multiline: "never",
                    selfClosingTag: {
                        multiline: "always",
                        singleline: "never",
                    },
                    singleline: "never",
                }],
                "vue/html-self-closing": ["error", {
                    html: {
                        component: "always",
                        normal: "never",
                        void: "never",
                    },
                }],
                "vue/max-attributes-per-line": ["error", {
                    multiline: {
                        max: 1,
                    },
                    singleline: {
                        max: 1,
                    },
                }],
            },
        },
        yaml: {
            overrides: {
                "yml/indent": ["error", 4, {
                    indentBlockSequences: true,
                    indicatorValueIndent: 2,
                }],
            },
        },
    },
    // https://eslint-community.github.io/eslint-plugin-es-x/
    pluginESx.configs["flat/restrict-to-es2024"],
    // https://github.com/eslint-community/eslint-plugin-promise
    pluginPromise.configs["flat/recommended"],
    // Node security related rules
    // https://github.com/eslint-community/eslint-plugin-security
    {
        files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
        plugins: {
            security: pluginSecurity,
        },
        rules: pluginSecurity.configs.recommended.rules,
    },
    // https://github.com/gkouziik/eslint-plugin-security-node
    {
        files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
        plugins: {
            "security-node": securityNode,
        },
        rules: /** @type {any} */ (Object.fromEntries(
            Object.entries(securityNode.configs.recommended.rules).map(
                ([key, value]) => [key, value === "error" || value === "warn" ? [value] : value],
            ),
        )),
    },
    // Custom overrides
    {
        rules: {
            "antfu/no-top-level-await": "off",
            "curly": ["error", "all"],
            "no-console": ["error", { allow: ["warn", "error", "info"] }],
            "perfectionist/sort-objects": ["error", {
                order: "asc",
                type: "alphabetical",
            }],
        },
    },
    // config with just ignores is the replacement for `.eslintignore`.
    // antfu config Reads from ".gitignore".
    // Add only those things here that are not in .gitignore
    {
        ignores: [
            // Dependencies
            "**/node_modules/**",
            // Build outputs
            "**/dist/**",
            "**/*.tgz",
            // Nuxt generated files
            "**/.nuxt/**",
            "**/.output/**",
            // Playground directories
            "**/.playground/**",
            // Cache and temporary files
            "**/.cache/**",
            "**/*.tsbuildinfo",
            "**/.eslintcache",
            // Coverage
            "**/coverage/**",
            "**/*.lcov",
            // Logs
            "**/logs/**",
            "**/*.log",
            // Environment files
            "**/.env",
            "**/.env.*",
        ],
    },
);
