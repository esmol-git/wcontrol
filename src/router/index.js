import Vue from 'vue'
import Router from 'vue-router'
import Handbook from '../views/handbooks/Handbook.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/Home.vue')
		},
		{
			path: '/order',
			name: 'order',
			component: () => import('../views/Order.vue')
		},
		{
			path: '/task',
			name: 'taskTransport',
			component: () => import('../views/TaskTransport.vue')
		},
		{
			path: '/users',
			name: 'users',
			component: () => import('../views/Users.vue')
		},
		{
			path: '/handbooks',
			redirect: { name: 'company' },
			component: Handbook,
			children: [
				{ path: 'company', name: 'company', component: () => import('../views/handbooks/CompanyHandbook.vue') },
				{ path: 'transport', name: 'transport', component: () => import('../views/handbooks/TransportHandbook.vue') },
				{ path: 'weighing', name: 'weighing', component: () => import('../views/handbooks/WeighingHandbook.vue') },
				{ path: 'scales', name: 'scales', component: () => import('../views/handbooks/ScalesHandbook.vue') },
				{ path: 'goods', name: 'goods', component: () => import('../views/handbooks/GoodsHandbook.vue') },
				{ path: 'unit', name: 'unit', component: () => import('../views/handbooks/UnitHandbook.vue') },
			]
		},
		{
			path: '/reports',
			name: 'reports',
			component: () => import('../views/Reports.vue')
		},
		{
			path: '/settings',
			name: 'settings',
			component: () => import('../views/Settings.vue')
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/auth/Login.vue'),
			meta: {
				layout: 'auth-layout'
			}
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('../views/auth/Register.vue'),
			meta: {
				layout: 'auth-layout'
			}
		},
	]
})
