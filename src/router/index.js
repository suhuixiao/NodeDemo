import Vue from 'vue'
import Router from 'vue-router'
// 登录页
import Login from '@/components/pages/Login'
// 注册页
import Register from '@/components/pages/Register'
// 首页（项目）
import ShoppingMall from '@/components/pages/ShoppingMall'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/shoppingMall',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
  ]
})
