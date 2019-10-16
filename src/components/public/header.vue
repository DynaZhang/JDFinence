<template>
  <div class="header">
    <span class="left">
      <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
    </span>
    <btn class="btn-download">App下载</btn>
  </div>
</template>

<script>
import Btn from '@/components/core/btn'
export default {
  name: 'jd-header',
  components: {Btn},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 100px;
    line-height: 100px;
    background: #ffffff url("https://m.jr.jd.com/spe/qyy/main/images/jr-logo.png") center center no-repeat;
    background-size: auto 50%;
    font-size: 32px;
    color: #666;
    .left {
      margin: 17px 0 0 18px;
      height: 30px;
      line-height: 30px;
      font-size: 28px;
    }
    .btn-download {
      float: right;
      margin: 28px 24px 0 0;
      padding: 0;
      border-width: 0;
      height: 56px;
      min-width: 120px;
      line-height: 56px;
      border-radius: 4px;
      font-size: 24px;
      color: #fff;
    }
  }
</style>
