<template>
    <div class="num">
        <template v-for="(item, index) in NumData" :key="index">
            <num-item
                :item="item"
                :data="data"
            />
        </template>
        
    </div>
</template>

<script>
import NumItem from './item'
import NumData from '@/datas/num'
export default {
    name: 'NumShow',
    components: {
        NumItem
    },
    props: {
        data: Object
    },
    setup() {
        return {
            NumData
        }
    }
}
</script>

<style lang="scss" scoped>
.num {
    display: flex;
    margin: .15rem 0;
    padding: .1rem;
    box-shadow: .02rem .02rem .05rem #999;
}
</style>