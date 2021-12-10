import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/pages/home'

Vue.use(Router)

export default new Router({
	mode:'hash', //路由模式:默认为hash,如果改为history,则需要后端进行配合
	//base:'/',//基路径:默认值为'/'.如果整个单页应用在/app/下,base就应该设为'/app/'.一般可以写成__dirname,在webpack中配置.
	routes:[{
		path: '/', 
		name: 'Login', //给路由命名,设置的name要唯一!
		component: Login//就是第一步import的组件
		},
    {
      path: '/home', 
      name: 'Home', //给路由命名,设置的name要唯一!
      component: Home//就是第一步import的组件
    }
    // {
		// 	//路由懒加载:单页面应用,首页时,加载内容时间过长.运用懒加载对页面组件进行划分,减少首页加载时间
		// 	// path:'/Page',
		// 	// name:'Page',
		// 	// component:resolve => require(['@/components/Page'],resolve)
		// 	//此时component则不需要在第一步import
		// }
  ]
})