<template>
    <div class="cons-item">
        <div class="title">{{title}}</div>
        <div class="content">{{ content || '加载中...' }}</div>
    </div>
</template>

<script>
export default {
    name: 'ConsItem',
    props: {
        title: String,
        content: String | Number
    }
}
</script>

<style lang="scss" scoped>
.cons-item {
    display: flex;
    height: .44rem;
    border: 1px solid #ddd;
    border-radius: .05rem;
    margin-bottom: .15rem;
    font-size: .16rem;
    background-color: #fff;

    .title {
        width: 1rem;
        height: .44rem;
        color: #c71585;
        text-align: center;
        line-height: .44rem;
    }

    .content {
        line-height: .44rem;
        color: #666;
        font-size: .14rem;
    }
}
</style>