<template>
  <div :class="[cname, className]">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="item.href">
          <img :src="item.src" alt="no pic" width="100%">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'jd-slider',
  props: {
    options: {
      type: Object,
      default () {
        return {
          autoplay: 3000,
          initialSlide: 0,
          direction: 'horizontal',
          speed: 300,
          pagination: '.swiper-pagination',
          notNextTick: false
        }
      }
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    className: {
      type: String,
      default: ''
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      cname: 'swiper'
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .swiper {
    margin-top: 120px;
    img {
      width: 100%;
    }
    & >>> .swiper-pagination-bullet-active {
      background-color: #ffffff
    }
  }
</style>
