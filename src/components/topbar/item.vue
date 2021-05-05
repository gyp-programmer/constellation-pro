<template>
    <div class="item-nav">
        {{ item }}
    </div>
</template>

<script>
export default {
    name: 'NavItem',
    props: {
        item: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.item-nav {
    width: .8rem;
    height: 100%;
    text-align: center;
    color: #000;
    line-height: .41rem;
    &.nav-current {
        color: #db7093;
    }
}
</style>