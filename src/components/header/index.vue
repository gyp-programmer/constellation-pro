<template functional>
    <header class="header">
        <img src="../../assets/img/header.jpeg" >
        <h1>
            <slot>星座运势</slot>
        </h1>
    </header>
</template>

<script>
export default {
    name: 'MyHeader'
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.44rem;
    font-size: .1rem;
    color: white;
    background-color: #db7093;
}
img {
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.08rem;
}
</style>