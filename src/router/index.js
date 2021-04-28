import { createRouter, createWebHistory } from 'vue-router'
import Today from '../views/Today'

const routes = [
  {
    path: '/',
    name: 'today',
    component: Today
  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    component: () => import(/* webpackChunkName: "tomorrow" */ '../views/Tomorrow.vue')
  },
  {
    path: '/week',
    name: 'week',
    component: () => import(/* webpackChunkName: "week" */ '../views/Week.vue')
  },
  {
    path: '/mouth',
    name: 'mouth',
    component: () => import(/* webpackChunkName: "mouth" */ '../views/Mouth.vue')
  },
  {
    path: '/year',
    name: 'year',
    component: () => import(/* webpackChunkName: "year" */ '../views/Year.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
