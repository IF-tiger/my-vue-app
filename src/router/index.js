import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
	{
		path: '/', 
		name: 'login', //给路由命名,设置的name要唯一!
		component: () => import('@/pages/login/login'),
	},
	{
		path: '/home', 
		name: 'home', //给路由命名,设置的name要唯一!
		component: () => import('@/pages/home/home'),
	},

]

export default new Router({
	mode:'hash', //路由模式:默认为hash,如果改为history,则需要后端进行配合
	//base:'/',//基路径:默认值为'/'.如果整个单页应用在/app/下,base就应该设为'/app/'.一般可以写成__dirname,在webpack中配置.
	routes
})