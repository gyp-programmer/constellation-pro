<!--
 * @Todo: 请补充模块描述
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-08 10:44:59
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
-->

<template>
    <div class="tab">
        <div
            class="tab-item"
            v-for="(item, index) in tabData"
            :key="index"
        >
            <tab-icon
                :iconText="item.iconText"
                :path="item.path"
            />
            <span
                :style="{
                    'color': router.path === item.path ? '#db7093' : '#999'
                }"
            >{{ item.tabText }}</span>
        </div>
    </div>
</template>

<script>
import TabIcon from './icon'
import tabData from '@/datas/tab'
import { useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'
export default {
  name: 'Tab',
  components: {
    TabIcon
  },
  setup () {
    const router = useRoute()
    const state = reactive({
      tabData,
      router
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .44rem;
    font-size: .1rem;
    background-color: #fff;
    border: 1px solid #ddd;
    .tab-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #999;
    }
}
</style>
