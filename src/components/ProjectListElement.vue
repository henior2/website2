<script setup lang="ts">

import { defineProps } from 'vue'

const props = defineProps({
	name: {type: String, required: true},
	href: {type: String, required: true},
	icon: String
})

</script>

<template>
	<div class="🖍️container">
		<div class="🖍️title">
			<a :href="href" target="_blank">
				<!-- <img height="50" :src="icon" v-if="icon" alt="Icon for {{ name }}" /> -->
				<i :class="['nf', icon]" v-if="icon"></i>
				<h2>{{ name }}</h2>
			</a>
<!--				<h2 v-if="icon">{{ name }}</h2>-->
		</div>
		<slot></slot>
	</div>
</template>

<style scoped>
h2 {
	font-size: 30px;
}
.🖍️container {
	--border: 1px solid var(--c-txt2);
	/*
	display: grid;
	grid-template-columns: min-content 1fr;
	gap: 15px;
	*/
	border-top: var(--border);
	border-bottom: var(--border);
	padding: 10px;
	margin: 20px 0;
}

.🖍️title a{
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 1rem;
}
.nf {
	font-size: 2em;
}
</style>