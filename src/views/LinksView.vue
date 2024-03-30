<script setup lang="ts">
import LinkList from '@/components/LinkList.vue'
import linktree from '@/content/linktree.json'
</script>

<template>
	<article>
		<h1>Linktree thingy</h1>
		<p>
			Here are some links to my social media and stuff
		</p>
		<LinkList :list-obj="linktree.links" />
		<p>
			Also, here are my friends' websites:
		</p>
		<LinkList :list-obj="linktree.friends" />
	</article>
</template>

<style scoped>

h1 {
	font-size: 2rem;
}
</style>