<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<article>
	<h1>404 Not Found</h1>
		<RouterLink class="link-button" to="/">Go back home</RouterLink>
	</article>
</template>

<style scoped>
h1 {
	font-size: 3rem;
}

.link-button {
	margin-top: 3rem;
}
</style>