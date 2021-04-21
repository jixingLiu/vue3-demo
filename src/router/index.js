import { createRouter, createWebHistory } from 'vue-router'
// 还有 createWebHashHistory 和 createMemoryHistory
import Login from '../views/login/index.vue'
import NoPage from "../views/exception/404.vue"
import Buyers from '../router/buyers'
import Supplier from '../router/supplier'
import Mall from '../router/mall'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...Mall,
    ...Supplier,
    ...Buyers,
    {
      path: '/',
      redirect: '/login',
      name: "Home",
    },
    {
      path: '/login',
      component: Login,
      name: "Login",
      meta: {title: 'Login'}
    },
    {
      path: "/404",
      component: NoPage,
      name: "NoPage",
      meta: {title: "页面丢失了"}
    },
    {
      path: "/*",
      redirect: '/404',
      name: "NoPage",
    }

  ],
})

export default router
