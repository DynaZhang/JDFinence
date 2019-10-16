<template>
  <div class="earn">
    <h-slider />
    <panel :title="'待领取福利'">
      <div slot="extra">
        <img src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/82058/36/11290/19531/5d8c84c8Ec8f7fa97/d9da85ec8c6436f1.png?width=278&height=78" />
      </div>
      <div slot="content">
        <div class="content-wrapper">
          <div class="top">
            <div class="icon-gift"></div>
            <div class="text">天天领红包</div>
            <div class="btn-wrapper">
              <p class="btn-text">去领取</p>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-list">
              <div class="item">
                <p>兑神券</p>
              </div>
              <div class="item">
                <p>领京豆</p>
              </div>
              <div class="item">
                <p>趣中奖</p>
              </div>
              <div class="item">
                <p>摇钱树</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </panel>
    <jd-slider :items="sliderItems" :class-name="sliderClassName" />
    <nav-bar :items="navBarItems"/>
  </div>
</template>

<script>
import HSlider from '@/components/earn/h-slider'
import NavBar from '@/components/public/nav-bar'
import Panel from '@/components/earn/panel'
import JdSlider from '@/components/core/slider'
export default {
  name: 'earn',
  components: {JdSlider, Panel, NavBar, HSlider},
  data () {
    return {
      navBarItems: [
        {
          href: '/index',
          icon: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/14074/26/4020/3830/5c2dbb29E5af43daf/0d8670c268e3bf73.png?width=100&height=100',
          title: ''
        },
        {
          href: '/earn',
          icon: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/35933/11/4072/3213/5cba85d9E5d65eb37/4a09fcd7905fe52b.png?width=100&height=100',
          title: ''
        },
        {
          href: '/borrow_money',
          icon: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/18724/16/3980/4955/5c2dbabcE7a4204d6/86951acc8fbb5170.png?width=100&height=100',
          title: ''
        }
      ],
      sliderItems: [
        {
          src: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/56975/39/11673/167165/5d8ad3c3E4556ac65/f2813c1cbfa32340.png?width=984&height=224',
          href: '/index'
        }
      ],
      sliderClassName: 'slider'
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .earn {
    background-color: #efefef;
    .content-wrapper {
      margin: 12px 16px;
      padding: 0 16px;
      background: transparent url("https://u.jr.jd.com/growing/reMoney/images/welf_grouping_47978bb454.png") no-repeat;
      background-size: cover;
      height: 256px;
      .top {
        display: flex;
        justify-items: center;
        height: 168px;
        .icon-gift {
          background: transparent url("https://img10.360buyimg.com/mcmktadmin/jfs/t1/27454/32/12048/7347/5c94bdd0E6e9d9a25/611102ce5816adb0.png?width=88&height=88") no-repeat;
          background-size: 100%;
          width: 88px;
          height: 88px;
          margin: auto 0;
        }
        .text {
          flex: 1;
          line-height: 168px;
          font-size: 32px;
          margin-left: 20px;
          font-weight: bold;
          color: #511c00;
          text-align: left;
        }
        .btn-wrapper {
          width: 166px;
          height: 64px;
          background-color: #ff6e00;
          border-radius: 32px;
          margin: auto 0;
          .btn-text {
            font-size: 32px;
            color: #fff;
            line-height: 64px;
            font-weight: bold;
            text-align: center;
          }
        }
      }
      .bottom {
        height: 88px;
        padding: 0 44px;
        .bottom-list {
          display: flex;
          justify-items: center;
          justify-content: space-around;
          margin-top: 30px;
          .item {
            float: left;
            width: 25%;
            border-right: 2px solid #999;
            &:last-child {
              border: none;
            }
            p {
              font-size: 28px;
              color: #999;
              text-align: center;
            }
          }
        }
      }
    }
    .slider {
      margin: 15px;
    }
  }
</style>
