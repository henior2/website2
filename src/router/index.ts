import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/links',
			name: 'links',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('@/views/LinksView.vue')
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('@/views/ProjectsView.vue')
		},
		{
			path: '/:catchAll(.*)',
			name: 'not-found',
			component: () => import('@/views/NotFoundView.vue')
			// redirect(to) {
			// 	// Redirect to home if route not found
			// 	return { name: 'home' }
			// }
		}
	]
})

export default router
