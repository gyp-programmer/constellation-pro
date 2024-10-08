<template>
  <div id="app">
    <my-header>
      星座物语
    </my-header>
    <nav-bar />
    <errorTip />
    <router-view v-slot="{Component}" v-if="!errorCode">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- <div class="main">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div> -->
    <tab />
  </div>
</template>

<script>
import MyHeader from '@/components/header'
import Tab from '@/components/tab'
import NavBar from '@/components/topbar'
import { useStore } from 'vuex'
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import errorTip from '@/components/errorTip'

export default {
  name: 'App',
  components: {
    MyHeader,
    Tab,
    NavBar,
    errorTip
  },
  setup () {
    const store = useStore()
    const state = store.state
    const router = useRouter()
    router.push('/')
    store.commit('setField', 'today')

    watch(() => {
      return router.currentRoute.value.name
    }, value => {
      store.commit('setField', value)
    })

    return {
      errorCode: computed(() => state.errorCode)
    }
  }
}
</script>
