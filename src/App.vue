<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import gifs from '@/content/gifs.json'
import { preloadImages } from '@/assets/preloadImages'
import { onMounted } from 'vue'

onMounted(async () => {
	await preloadImages(gifs)
})

const year = new Date().getFullYear()

const theme = 100;

</script>

<template>
	<header class="layout-component">
		<RouterLink to="/">
			<h1>henior</h1>
		</RouterLink>
		<nav>
			<RouterLink to="/links">Linktree?</RouterLink>
			<RouterLink to="/projects">Projects</RouterLink>
		</nav>
	</header>

	<div class="content layout-component">
		<main>
			<RouterView />
		</main>

		<footer>
			<p>&copy; {{ year > 2024 ? `2024 - ${year}` : `2024` }} henior</p>
		</footer>
	</div>
</template>
