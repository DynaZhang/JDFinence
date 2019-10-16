<template>
  <div class="new-items">
    <Panel :title="'- 众筹新品 -'">
      <div class="items-wrapper" ref="itemsScroll" slot="content">
        <ul class="items-list">
          <li class="item" v-for="item in items" :key="item.href">
            <router-link :to="item.href">
              <img :src="item.img" />
            </router-link>
          </li>
        </ul>
      </div>
      <div slot="extra">
        <p>更多尖货 ></p>
      </div>
    </Panel>
  </div>
</template>

<script>
import Panel from '../core/panel'
import BScroll from 'better-scroll'
export default {
  name: 'new-items',
  components: {
    Panel
  },
  data () {
    return {
      itemsScroll: null,
      items: [
        {
          href: 'https://z.jd.com/project/details/116654.html',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/50050/5/6566/36727/5d41873aEc3382fc4/d9777468823c0b2a.jpg?width=335&height=421'
        },
        {
          href: 'https://z.jd.com/project/details/117914.html',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/80805/20/6012/33103/5d418790Efe2deb02/9bd97297964310e3.jpg?width=335&height=421'
        },
        {
          href: 'https://z.jd.com/project/details/118111.html',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/84523/40/6287/29812/5d4187c2E708c6479/389263b0d68315bf.jpg?width=335&height=421'
        }
      ]
    }
  },
  methods: {},
  mounted () {
    this.$nextTick(() => {
      this.itemsScroll = new BScroll(this.$refs.itemsScroll, {
        scrollX: true,
        scrollY: false,
        click: true
      })
    })
  }
}
</script>

<style scoped lang="scss">
  .new-items {
    .items-wrapper {
      width: 100%;
      .items-list {
        display: -webkit-box;
        width: min-content;
        .item {
          margin: 0 16px 12px;
          img {
            width: 250px;
            height: 314px;
          }
        }
      }
    }
  }
</style>
