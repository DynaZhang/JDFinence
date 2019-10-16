<template>
  <div class="money-mission">
    <Panel :title="'- 赏金任务 -'" >
      <div class="mission-wrapper" ref="missionScroll" slot="content">
        <ul class="mission-list" ref="missionList">
          <li class="item" v-for="item in items" :key="item.href">
            <router-link :to="item.href">
              <img :src="item.img" :alt="item.href" />
            </router-link>
          </li>
        </ul>
      </div>
      <div slot="extra">
        <p>查看更多任务 ></p>
      </div>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/core/panel'
import BScroll from 'better-scroll'
export default {
  name: 'money-mission',
  components: {Panel},
  data () {
    return {
      items: [
        {
          href: 'https://m.jr.jd.com/member/memberCenter/growthValue.html',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260'
        },
        {
          href: 'https://m.jr.jd.com/vip/member/md.html?missionId=111',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260'
        },
        {
          href: 'https://m.jr.jd.com/vip/member/md.html?missionId=109',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260'
        },
        {
          href: 'https://m.jr.jd.com/vip/member/md.html?missionId=31',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260'
        }
      ],
      missionScroll: null
    }
  },
  methods: {},
  mounted () {
    this.$nextTick(() => {
      this.missionScroll = new BScroll(this.$refs.missionScroll, {
        scrollY: false,
        scrollX: true,
        click: true
      })
    })
  }
}
</script>

<style scoped lang="scss">
  .money-mission {
    .mission-wrapper {
      .mission-list {
        display: -webkit-box;
        width: min-content;
        .item {
          margin: 0 12px 0 16px;
        }
      }
    }
  }
</style>
