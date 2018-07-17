// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import {Button, Row, Col, Swipe, SwipeItem , Lazyload ,List ,Field, NavBar } from 'vant'

Vue.use(Field).use(NavBar).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List)

Vue.config.productionTip = false

Vue.use(VueTouch, {name: 'v-touch'})
// 滑动
Vue.use(VueAwesomeSwiper)
// 注册全局组件，比如底部栏、头部栏、toast组件等
import Com from '@/components/js/components'
Vue.prototype.Com = Com
Com.init()

// 路由跳转控制
router.beforeEach((to, from, next) => {
	// 用户信息页面需要验证key
	if(to.meta.needCheck) {
		if(localStorage.getItem('key')) {
			next()
		}else{
			// 没有key则跳回登录
			next({
	            path: '/',
	            query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
	        })
		}
	}else {
		next()
	}
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
