export const useCounterStore = defineStore("counter", () => {
    // State
    const count = ref(0);

    // Getters
    const doubleCount = computed(() => count.value * 2);

    // Actions
    function increment() {
        count.value++;
    }

    function decrement() {
        count.value--;
    }

    function reset() {
        count.value = 0;
    }

    return {
        count,
        decrement,
        doubleCount,
        increment,
        reset,
    };
});
