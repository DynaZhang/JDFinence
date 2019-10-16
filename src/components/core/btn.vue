<template>
  <div :class="[btnClass,cname]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'btn',
  props: {
    cname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      btnClass: 'btn'
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import "~@/common/styles/element.scss";
  .btn {
    @include btn()
  }
</style>
