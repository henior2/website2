<script setup lang="ts">
import gifs from '@/content/gifs.json'
import { ref, onMounted } from 'vue'

const gif = ref("")
const randomGif = () => {
	const prevGif = gif.value
	while (gif.value === prevGif) {
		gif.value = gifs[Math.floor(Math.random() * gifs.length)]
	}
}
onMounted(randomGif)

</script>

<template>
	<img :src="gif" :alt="`funny gif from ${gif}`" height="200" class="gif" @click="randomGif">

</template>

<style scoped>
.gif {
	margin: 0 auto;
	display: block;
	cursor: pointer;
}
</style>