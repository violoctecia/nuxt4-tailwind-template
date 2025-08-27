<template>
	<MainHeader />
	<main>
		<slot />
	</main>
</template>

<script setup lang="ts">
import MainHeader from '~/components/MainHeader.vue';
</script>
