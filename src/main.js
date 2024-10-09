/*
 * 应用主入口
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-08 10:44:59
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import routerInstance from './router'
import store from './store'
import '@/assets/js/common.js'
import MyPlugin from '@/components/common'
import '@/assets/css/common.css'

let router = null
let instance = null
function render (props = {}) {
  const { container } = props
  router = routerInstance(!!container)

  instance = createApp(App).use(router).use(store).use(MyPlugin)
  instance.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props) {
  console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount () {
  instance.unmount()
  instance = null
  router = null
}
