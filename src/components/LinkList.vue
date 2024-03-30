<script setup lang="ts">
import { defineProps } from 'vue'

type LinksObject = { name: string, href: string }[]

const props = defineProps({
		listObj: {
			type: Object as () => LinksObject,
			required: true
		}
})

</script>

<template>
	<ul>
		<li v-for="element in listObj">
			<a :href="element.href" target="_blank">{{element.name}}</a>
		</li>
	</ul>
</template>