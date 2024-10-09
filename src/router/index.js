/*
 * 路由入口文件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-08 10:44:59
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import { createRouter, createMemoryHistory } from 'vue-router'
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
    path: '/month',
    name: 'month',
    component: () => import(/* webpackChunkName: "mouth" */ '../views/Mouth.vue')
  },
  {
    path: '/year',
    name: 'year',
    component: () => import(/* webpackChunkName: "year" */ '../views/Year.vue')
  }
]

export default isMicroApp => {
  return createRouter({
    history: createMemoryHistory(isMicroApp ? '/micro-vue/' : process.env.BASE_URL),
    routes
  })
}
