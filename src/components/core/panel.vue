<template>
  <section :class="[panelClass, cname]">
    <div class="top">
      <h4 class="title">{{ title }}</h4>
      <div class="extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <slot name="content"/>
  </section>
</template>

<script>
export default {
  name: 'panel',
  props: {
    title: {
      type: String,
      default: ''
    },
    cname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      panelClass: 'panel'
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import "~@/common/styles/element.scss";
  .panel {
    @include panel();
    .top {
      .title {
        font-weight: 700;
      }
    }
  }
</style>
