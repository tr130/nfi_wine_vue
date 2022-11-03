import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WineList from '../views/WineList.vue'
import WineDetails from '@/views/WineDetails.vue'
import ShowCart from '@/views/ShowCart.vue'
import LoginPage from '@/views/LoginPage.vue'
import AccountDetails from '@/views/AccountDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/winelist',
      name: 'WineList',
      component: WineList
    },
    {
      path: '/details/:wine_slug',
      name: 'WineDetails',
      component: WineDetails
    },
    {
      path: '/showcart',
      name: 'ShowCart',
      component: ShowCart
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/account',
      name: 'AccountDetails',
      component: AccountDetails
    },
  ]
})

export default router
