<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import gifs from '@/content/gifs.json'

const year = new Date().getFullYear()

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
			
			<footer>
				<p>&copy; {{ year > 2024 ? `2024 - ${year}` : `2024` }} henior</p>
			</footer>
		</main>
	</div>
</template>
