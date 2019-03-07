import Vue from 'vue';
import Router from 'vue-router';
import GMap from './views/GMap.vue';
import Signup from './views/auth/Signup';
import Login from './views/auth/Login';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'GMap',
			component: GMap
		},
		{
			path: '/signup',
			name: 'Signup',
			component: Signup
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		}
	]
});
