<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { onImgLoad } from '@/assets/preloadImages'

const gif = ref("")

const isLoaded= ref(false)

const timeout = ref(0)

const props = defineProps({
	gifs: {
		type: Array as () => string[],
		required: true
	}
})

let firstGif = true;

onImgLoad((image) => {
	if(firstGif) {
		gif.value = image
		firstGif = false
		timeout.value = setTimeout(() => {
			randomGif()
		}, 15000)
	}
})

const gifs = props.gifs

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

</script>

<template>
	<div>
		<img :src="gif" :alt="`funny gif from ${gif}`" class="gif" @click="randomGif" @load="isLoaded=true" v-show="isLoaded">
<!--		<div class="gif"></div>-->
		<div class="loading" v-show="!isLoaded"></div>
	</div>

</template>

<style scoped>

.gif, .loading {
	display: block;
	margin: 2rem auto 0 auto;
	height: 200px;
}

.gif {
	cursor: pointer;
}

@media screen and (max-width: 900px) {
	.gif, .loading {
		width: 100%;
		height: auto;
	}
	.loading {
		aspect-ratio: 1/1;
	}
}
</style>
