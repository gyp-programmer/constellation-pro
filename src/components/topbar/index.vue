<template>
    <div class="nav-bar" v-nav-current="{
        className: 'item-nav',
        activeClassName: 'nav-current',
        curIdx
    }">
        <div class="scroll-wrapper">
            <div class="nav-wrapper" :style="`width: ${NavData.length * .8}rem`">
                <nav-item
                    v-for="(item, index) in NavData"
                    :key="index"
                    :item="item"
                    :index="index"
                    @click="navClick(index, item)"
                ></nav-item>
            </div>
        </div>
    </div>
</template>

<script>
import NavData from '@/datas/nav'
import NavItem from './item'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { NavCurrent } from '@/directives'
import getData from '@/services'
export default {
    name: 'TopBar',
    components: {
        NavItem
    },
    directives: {
        NavCurrent
    },
    setup() {
        const curIdx = ref(0),
                store = useStore()
        const navClick = (index, item) => {
            curIdx.value = index
            store.commit('setConsName', item)
            getData(store)
        }
        return {
            NavData,
            curIdx,
            navClick
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-bar {
    position: fixed;
    top: .44rem;
    left: 0;
    width: 100%;
    height: 0.38rem;
    font-size: .1rem;
    border-bottom: 1px solid #ddd;
    z-index: 1;
    overflow: hidden;
    background-color: #fff;
    .scroll-wrapper {
        overflow-x: auto;
        height: .46rem;
        
        .nav-wrapper {
            display: flex;
            height: .42rem;
        }
    }
}
</style>