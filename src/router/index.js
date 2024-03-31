import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Insights from '../views/Insights.vue'
import Settings from '../views/Settings.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/insights',
			component: Insights
		},
		{
			path: '/settings',
			component: Settings
		},
		{
			path: '/profile',
			component: Profile
		}
	],
})

export default router