<template>
	<header class="container mb-2 flex items-center justify-center">
		<nav>
			<ul class="flex gap-4 text-sm">
				<li class="flex" v-for="item in menuItems" :key="item.title">
					<NuxtLink class="py-6 transition-colors hover:text-primary" :to="item.link">{{ item.title }}</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup lang="ts">
const menuItems = [
	{ title: 'Home Page', link: '/' },
	{ title: 'Second Page', link: '/second-page' },
];
</script>
