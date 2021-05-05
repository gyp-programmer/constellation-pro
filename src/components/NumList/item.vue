<template>
    <div class="item-num" :style="`background-color: ${item.bgColor}`">
        <h1>{{ item.title }}</h1>
        <p>{{ data[item.field] || 0 }}</p>
    </div>
</template>

<script>
export default {
    name: 'NumItem',
    props: {
        item: Object,
        data: Object
    }
}
</script>

<style lang="scss" scoped>
.item-num {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #666;

    h1 {
        font-size: .16rem;
    }

    p {
        font-size: .2rem;
        margin-top: .06rem;
        margin-bottom: .1rem;
    }
}
</style>