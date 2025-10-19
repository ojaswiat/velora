<template>
    <div class="inline-flex flex-col items-center gap-6 p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
        <!-- Counter Display -->
        <div class="text-center space-y-2">
            <div class="text-7xl font-bold tabular-nums bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {{ counterStore.count }}
            </div>
            <div class="text-xs text-gray-500">
                Double: <span class="font-medium text-emerald-400">{{ counterStore.doubleCount }}</span>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2">
            <button
                class="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                @click="counterStore.decrement">
                Decrement
            </button>
            <button
                class="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                @click="counterStore.reset">
                Reset
            </button>
            <button
                class="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                @click="counterStore.increment">
                Increment
            </button>
        </div>

        <!-- Footer -->
        <div class="flex items-center gap-2 text-xs text-gray-600">
            <span class="w-1 h-1 bg-green-500 rounded-full"></span>
            Pinia Store
        </div>
    </div>
</template>

<script setup lang="ts">
const counterStore = useCounterStore();
</script>
