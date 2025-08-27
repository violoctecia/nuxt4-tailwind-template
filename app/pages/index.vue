<template>
	<div class="container flex flex-col items-center text-center text-lg text-gray-800">
		<h1 class="mb-8 text-4xl">Home page</h1>
		<p>Count: {{ store.count }}</p>
		<p>Double count: {{ store.doubleCount }}</p>
		<button class="mt-4 w-fit rounded-md bg-blue-700 px-4 py-2 text-white transition-colors hover:bg-primary" @click="store.increment()">Increment</button>
	</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counterStore';

const store = useCounterStore();
</script>
