<template>
    <div class="container">
        <cons-card
            :name="tomorrowData.name"
            :allIndex="tomorrowData.all"
         />
        <ConsList :data="tomorrowData" />
    </div>
</template>

<script>
import { computed, onMounted, onActivated, ref } from 'vue'
import { useStore } from 'vuex'
import getData from '../services'
import ConsList from '@/components/list/tomorrow'

export default {
    name: 'TomorrowPage',
    components: {
        ConsList
    },
    setup() {
        const store = useStore(),
              state = store.state,
              status = ref('')

        onMounted(() => {
            getData(store)
            status.value = state.consName
        })

        onActivated(() => {
            if(status.value !== state.consName) {
                getData(store)
                status.value = state.consName
            }
        })

        return {
            tomorrowData: computed(() => state.tomorrow)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>