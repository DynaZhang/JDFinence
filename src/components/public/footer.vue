<template>
  <div class="footer">
    <div class="row">
      <p class="text">Copyright © 2004-2018 京东JD.com 版权所有</p>
    </div>
    <div class="row">
      <p class="text">投资有风险，购买需谨慎</p>
    </div>
    <div class="row">
      <p class="text">京东金融平台服务协议</p>
    </div>
    <div class="row">
      <p class="text">京东金融隐私政策</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jd-footer',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .footer {
    border-top: 1px solid #ccc;
    .row {
      height: 86px;
      line-height: 86px;
      border-bottom: 1px solid #ccc;
      .text {
        text-align: center;
        font-size: 24px;
        color: #999;
      }
    }
  }
</style>
