<script setup lang="ts">
import ProjectListElement from '@/components/ProjectListElement.vue'
import projects from '@/content/projects.json'
</script>

<template>
	<article>
	<h1>My projects</h1>
		<p>
			Here are some projects I've made / worked on
		</p>
		<ProjectListElement v-for="project in projects"
												:name="project.name"
												:href="project.url"
												:icon="project.icon"
		>
			{{project.description}}
		</ProjectListElement>
	</article>
</template>

<style scoped>
h1 {
	font-size: 2rem;
}
</style>