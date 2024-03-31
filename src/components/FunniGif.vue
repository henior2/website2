<script setup lang="ts">
import gifs from '@/content/gifs.json'
import { ref, onMounted } from 'vue'

const gif = ref("")

const isLoaded= ref(false)

const timeout = ref(0)

const randomGif = () => {
	clearTimeout(timeout.value)
	const prevGif = gif.value
	while (gif.value === prevGif) {
		gif.value = gifs[Math.floor(Math.random() * gifs.length)]
	}
	isLoaded.value = false
	timeout.value = setTimeout(() => {
		randomGif()
	}, 15000)
}

onMounted(randomGif)

</script>

<template>
	<img :src="gif" :alt="`funny gif from ${gif}`" height="200" class="gif" @click="randomGif" @load="isLoaded=true" v-show="isLoaded">
	<div class="loading" v-show="!isLoaded"></div>

</template>

<style scoped>

.gif, .loading {
	display: block;
	margin: 2rem auto 0 auto;
}

.gif {
	cursor: pointer;
}
.loading {
	height: 200px;
}

</style>