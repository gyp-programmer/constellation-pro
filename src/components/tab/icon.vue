<template>
    <div class="icon">
        <router-link
            :to="path"
            class="tab-icon"
        >
            {{ iconText }}
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'TabIcon',
  props: {
    iconText: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.icon {
    background-color: #ddd;
    border-radius: 50%;
    width: 0.18rem;
    text-align: center;
    .tab-icon {
        text-decoration: none;
        color: #999;
    }
    .router-link-active {
        color: #db7093;
    }
}
</style>
