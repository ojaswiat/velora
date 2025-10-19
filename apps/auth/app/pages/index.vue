<template>
    <div class="min-h-screen bg-gray-950 text-white font-sans">
        <!-- Hero Section -->
        <section class="relative overflow-hidden">
            <!-- Background gradients -->
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,220,130,0.15),transparent_50%)]">
            </div>
            <div
                class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(120,119,198,0.15),transparent_50%)]">
            </div>

            <div class="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
                <div class="text-center space-y-8">
                    <!-- Main heading -->
                    <div class="space-y-6">
                        <h1 class="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
                            <span class="block text-white">The Progressive</span>
                            <span
                                class="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Monorepo Template
                            </span>
                        </h1>
                        <p class="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-400 font-light leading-relaxed">
                            Create high-quality web applications with Velora, the modern monorepo template that makes
                            full-stack development with Nuxt and Bun intuitive.
                        </p>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <a
                            href="https://github.com/ojaswiat/velora"
                            target="_blank"
                            rel="noopener"
                            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105">
                            <span>Get Started</span>
                            <svg
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://ojaswiat.com"
                            target="_blank"
                            rel="noopener"
                            class="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20">
                            <span>Learn More</span>
                        </a>
                    </div>

                    <!-- Tech Stack -->
                    <div class="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-500">
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Nuxt 4
                        </span>
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Bun
                        </span>
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Pinia
                        </span>
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            UnoCSS
                        </span>
                        <span class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            TypeScript
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Counter Section -->
        <section class="relative py-24">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center space-y-12">
                    <div class="space-y-4">
                        <h2 class="text-4xl sm:text-5xl font-bold text-white">
                            Interactive Demo
                        </h2>
                        <p class="text-lg text-gray-400">
                            A simple counter with Pinia state management
                        </p>
                    </div>

                    <div class="flex justify-center">
                        <Counter />
                    </div>
                </div>
            </div>
        </section>

        <!-- Logo Showcase Section -->
        <section class="relative py-24 border-t border-white/10">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center space-y-12">
                    <div class="space-y-4">
                        <h2 class="text-4xl sm:text-5xl font-bold text-white">
                            Shared Component Layer
                        </h2>
                        <p class="text-lg text-gray-400">
                            This logo component is shared from the base layer
                        </p>
                    </div>

                    <div class="flex flex-col items-center gap-8">
                        <Logo size="lg" />
                        <div class="flex items-center gap-6">
                            <Logo size="sm" />
                            <Logo size="md" />
                            <Logo size="lg" />
                        </div>
                        <Logo
                            size="md"
                            :show-text="false"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="relative py-24">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="space-y-3">
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                            <svg
                                class="w-6 h-6 text-green-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-white">
                            Lightning Fast
                        </h3>
                        <p class="text-gray-400 leading-relaxed">
                            Built with Bun, the fast all-in-one JavaScript runtime for blazing fast performance
                        </p>
                    </div>

                    <div class="space-y-3">
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                            <svg
                                class="w-6 h-6 text-green-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-white">
                            Monorepo Structure
                        </h3>
                        <p class="text-gray-400 leading-relaxed">
                            Organized workspace with apps, layers, libs, and plugins for scalable development
                        </p>
                    </div>

                    <div class="space-y-3">
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                            <svg
                                class="w-6 h-6 text-green-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-white">
                            Production Ready
                        </h3>
                        <p class="text-gray-400 leading-relaxed">
                            Pre-configured with ESLint, TypeScript, and best practices for enterprise applications
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="relative border-t border-white/10 py-12">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div class="flex items-center gap-2">
                        <span
                            class="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            Velora
                        </span>
                        <span class="text-sm text-gray-500">
                            by
                            <a
                                href="https://github.com/ojaswiat"
                                target="_blank"
                                rel="noopener"
                                class="text-gray-400 hover:text-white transition-colors">
                                @ojaswiat
                            </a>
                        </span>
                    </div>

                    <div class="flex items-center gap-6">
                        <a
                            href="https://github.com/ojaswiat/velora"
                            target="_blank"
                            rel="noopener"
                            class="text-gray-400 hover:text-white transition-colors">
                            <svg
                                class="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://ojaswiat.com"
                            target="_blank"
                            rel="noopener"
                            class="text-gray-400 hover:text-white transition-colors">
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                        </a>
                    </div>

                    <div class="text-sm text-gray-500">
                        MIT License © 2025
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
useHead({
    meta: [
        { content: "A modern monorepo template for building Nuxt applications using Bun", name: "description" },
    ],
    title: "Velora - Nuxt Bun Monorepo Template",
});
</script>
