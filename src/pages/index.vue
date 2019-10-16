<template>
  <div class="index">
    <jd-header />
    <h-slider />
    <money-mission />
    <insure />
    <new-items />
    <jd-footer />
    <nav-bar :items="navBarItems"/>
  </div>
</template>

<script>
import JdHeader from '@/components/public/header'
import HSlider from '@/components/index/h-slider'
import MoneyMission from '@/components/index/money-mission'
import Insure from '@/components/index/insure'
import NewItems from '@/components/index/new-items'
import JdFooter from '@/components/public/footer'
import NavBar from '@/components/public/nav-bar'
export default {
  name: 'index',
  components: {NavBar, JdFooter, NewItems, Insure, MoneyMission, HSlider, JdHeader},
  data () {
    return {
      navBarItems: [
        {
          href: '/index',
          icon: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90',
          title: '首页'
        },
        {
          href: '/earn',
          icon: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60',
          title: '赚钱'
        },
        {
          href: 'https://m.jr.jd.com/vip/borrowMoney/html/index.html?sid=',
          icon: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60',
          title: '借钱'
        },
        {
          href: 'https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage',
          icon: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60',
          title: '省钱'
        },
        {
          href: 'https://m.jr.jd.com/spe/qyy/main/index.html?userType=95&sid=',
          icon: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60',
          title: '金融会员'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .index {
    background-color: #f5f5f5;
  }
</style>
