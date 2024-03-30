<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

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
