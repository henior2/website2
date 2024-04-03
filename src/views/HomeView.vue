<script setup lang="ts">
import LinkList from '@/components/LinkList.vue'
import FunniGif from '@/components/FunniGif.vue'
import learning from '@/content/learning.json'
import gifs from '@/content/gifs.json'

import { preloadImages } from '@/assets/preloadImages'
import { onMounted } from 'vue'

onMounted(async () => {
	await preloadImages(gifs)
})

</script>

<template>
	<article>
		<h1>Hi</h1>
		<p>
			I'm henior, a silly creature from Poland who does coding stuff
		</p>
		<p>
			This page has been made with Vue 3 and Vite, I'm planning to rewrite it one day using Nuxt
		</p>
		<p title="God I should've used some kind of CMS instead of this">I'm currently learning these technologies (the list may be outdated):</p>
		<LinkList :list-obj="learning" />
		<FunniGif class="gif" :gifs="gifs" />
	</article>
</template>

<style scoped>

h1 {
	font-size: 5rem;
}

.gif {
	margin-top: 3rem;
}
</style>
