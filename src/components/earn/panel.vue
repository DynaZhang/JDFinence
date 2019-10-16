<template>
  <div class="panel">
    <div class="top">
      <div class="left">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="right">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .panel {
    .top {
      height: 78px;
      padding: 0 32px;
      clear: both;
      .left {
        float: left;
        line-height: 78px;
        .title {
          font-size: 40px;
          color: #000;
          font-weight: bold;
          position: relative;
          &::before {
            content: ' ';
            display: inline-block;
            width: 40px;
            height: 40px;
            background-color: rgba(0,0,0,.2);
            border-radius: 20px;
            position: absolute;
            top: 0;
            left: -15px;
          }
        }
      }
      .right {
        float: right;
        line-height: 78px;
      }
    }
  }
</style>
