// ~/stores/counterStore.ts
import { defineStore } from 'pinia';

export interface CounterState {
    count: Ref<number>;
    doubleCount: Ref<number>;
    increment: () => void;
}

export const useCounterStore = defineStore('counter', (): CounterState => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);

    function increment() {
        count.value++;
    }

    return { count, doubleCount, increment };
});
