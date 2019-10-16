<template>
  <div class="earn-header">
    <jd-slider :items="items" :options="options" :class-name="className"></jd-slider>
  </div>
</template>

<script>
import JdSlider from '@/components/core/slider'
export default {
  name: 'h-slider',
  components: {JdSlider},
  data () {
    return {
      items: [
        {
          href: '/index',
          src: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/73256/19/12889/69614/5da3dde5Ed92c8e14/7052c0a271e213aa.png?width=686&height=396'
        },
        {
          href: '/earn',
          src: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/44477/12/10799/129197/5d775037E8fa0ae6c/fd655f86f9f32ca1.png?width=686&height=396'
        },
        {
          href: '/borrow_money',
          src: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/58095/20/12871/168130/5d9bed60Eb021db18/2d13b329cb6bc780.png?width=686&height=396'
        },
        {
          href: '/save_money',
          src: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/48467/14/11857/184759/5d8d77b6Ed9687a69/1641ba2127d14518.png?width=686&height=396'
        },
        {
          href: '/finance_vip',
          src: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/71324/24/11304/196195/5d8c350dE7db41c74/ec0a7557e3343990.png?width=686&height=396'
        }
      ],
      options: {
        autoplay: 3000,
        initialSlide: 0,
        direction: 'horizontal',
        speed: 300,
        pagination: '.swiper-pagination',
        notNextTick: false,
        effect: 'coverflow'
      },
      className: 'slider'
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .earn-header {
    height: 600px;
    width: 100%;
    background: transparent url("https://u.jr.jd.com/growing/reMoney/images/Bitmapbg_c46fb46496.jpg") no-repeat 0 -120px;
    background-size: cover;
    .slider {
      width: 686px;
      height: 396px;
      margin: 0 auto;
      padding-top: 30px;
      & >>> .swiper-pagination {
        margin-left: 30px;
      }
      & >>> .swiper-pagination-bullet {
        float: left;
        width: 20px;
        height: 10px;
        border-radius: 10px;
      }
    }

  }
</style>
