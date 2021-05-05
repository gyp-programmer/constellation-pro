<template>
    <div class="container">
        <cons-card
            :name="mouthData.name"
            :allIndex="Number(mouthData.all)"
         />
         <ConsList :data="mouthData" />
    </div>
</template>

<script>
import { computed, onMounted, onActivated, ref } from 'vue'
import { useStore } from 'vuex'
import getData from '../services'
import ConsList from '@/components/list/month'

export default {
    name: 'MouthPage',
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
            mouthData: computed(() => state.month)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>