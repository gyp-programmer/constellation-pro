<template>
  <div id="app">
    <my-header>
      星座物语
    </my-header>
    <div class="main">
      <router-view/>
    </div>
    <tab />
  </div>
</template>

<script>
import MyHeader from '@/components/header'
import Tab from '@/components/tab'
export default {
  name: 'App',
  components: {
    MyHeader,
    Tab
  }
}
</script>
