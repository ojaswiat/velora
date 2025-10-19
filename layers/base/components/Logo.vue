<template>
    <div class="inline-flex items-center gap-3">
        <!-- Logo Icon -->
        <div
            :class="sizeClasses"
            class="rounded-lg bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <svg
                class="w-3/5 h-3/5 text-white"
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

        <!-- Logo Text -->
        <span
            v-if="showText"
            :class="textSizeClasses"
            class="font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Velora
        </span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    showText?: boolean;
    size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<Props>(), {
    showText: true,
    size: "md",
});

const sizeClasses = computed(() => {
    switch (props.size) {
        case "sm":
            return "h-8 w-8";
        case "lg":
            return "h-16 w-16";
        default:
            return "h-12 w-12";
    }
});

const textSizeClasses = computed(() => {
    switch (props.size) {
        case "sm":
            return "text-lg";
        case "lg":
            return "text-3xl";
        default:
            return "text-2xl";
    }
});
</script>
