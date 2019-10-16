<template>
  <div class="insure">
    <Panel :title="'- 保险保障 -'" >
      <div class="insure-wrapper" ref="insureScroll" slot="content">
        <ul class="insure-list" ref="insureList">
          <li class="item" v-for="item in items" :key="item.href">
            <router-link :to="item.href">
              <img :src="item.img" :alt="item.href" />
            </router-link>
          </li>
        </ul>
      </div>
    </Panel>
  </div>
</template>

<script>
import Panel from '../core/panel'
import BScroll from 'better-scroll'
export default {
  name: 'insure',
  components: {
    Panel
  },
  data () {
    return {
      items: [
        {
          href: 'https://m.jr.jd.com/member/memberCenter/growthValue.html',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19965/4/1946/28370/5c18958aE9e8a930d/9810bed7979e6bd5.jpg?width=210&height=260'
        },
        {
          href: 'https://m.jr.jd.com/vip/member/md.html?missionId=111',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/27283/39/2034/26756/5c1895b5Ecbfdf7ed/6a0755f1f40e2eb9.jpg?width=210&height=260'
        },
        {
          href: 'https://m.jr.jd.com/vip/member/md.html?missionId=109',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/27014/35/2022/24897/5c1895d9Ef095679a/c0918d244bbfb2e5.jpg?width=210&height=260'
        },
        {
          href: 'https://m.jr.jd.com/vip/member/md.html?missionId=31',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19150/30/2037/31576/5c1895f2Eb431149e/7a71e063250f8b0d.jpg?width=210&height=260'
        },
        {
          href: 'https://baoh5.jd.com/app/bx/item?itemId=2018092701&source=HDYM&resourcePlace=mzbxbz',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/9279/3/9618/27165/5c189693E5d54e2cb/c263629839992767.jpg?width=210&height=260'
        }
      ],
      insureScroll: null
    }
  },
  methods: {},
  mounted () {
    this.$nextTick(() => {
      this.insureScroll = new BScroll(this.$refs.insureScroll, {
        scrollY: false,
        scrollX: true,
        click: true
      })
    })
  }
}
</script>

<style scoped lang="scss">
  .insure {
    .insure-wrapper {
      .insure-list {
        display: -webkit-box;
        width: min-content;
        .item {
          margin: 0 12px 0 16px;
        }
      }
    }
  }
</style>
