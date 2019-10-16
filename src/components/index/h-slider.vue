<template>
  <article class="h-slider">
    <jd-slider :items="items" :class-name="sliderClassNames"></jd-slider>
    <section class="list">
      <div class="item" v-for="item in enters" :key="item.img">
        <router-link :to="{name: item.href}">
          <img :src="item.img" :alt="item.title">
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
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
          href: '//pro.m.jd.com/mall/active/2VscaSK474WTr4ytUpfysyPq4dMv/index.html',
          src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/81753/2/12427/203308/5d9eef91Ea38cd13d/372e6054b09c01eb.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          href: '//pro.m.jd.com/mall/active/jnAKSw3tHg2iqrvXMFCQQ6cjZK8/index.html',
          src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/46321/2/13399/82985/5da4589eE68ce4a80/0960c1a6b01fc309.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          href: '//ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9wcm8ubS5qZC5jb20vbWFsbC9hY3RpdmUvNFRFRnhWVkZRN1VqM2Q5dm52U0t1emduTFU4QS9pbmRleC5odG1s&log=JI-V5gdqVUu_U8vobYMjUCQqBUJRQHNb3hSYgTtn2pTNHj7V6E5MN3DAz2Bhy8dIzM0xT6BagGe8D8GlrdqE5HATXv3vB9FCFqfdJG0A52INxP-9FzYjsHZKArSAcuy8nO7cV2xmpd-WPNWVakoB_6EyZVZD4pesrRC5IS45KhQ5mO_ZjY1cohe4876NdJ69uiyJcRqIe6rrbAjs2VxwM8o0KuNfh6quThVfbFXMJ_DAb6usnr5W-vbnJdb9Mn34h0GMvPWJJ4M5TO9Mc4IhS0wlm20yoHxbMtpXfJ-HVeXvfiAmvTNjwkup-hYGBxYmW-jd0vqjzg32P6zyF2gdbT-iZr63jIf31FAiIdIV6GJ4Yd4lLvgNvsG6rA_Vnk_N-AHfoZZf5xKpf8G3Uz1iBM7T2B394kIPPJsXx2N0BJqVoEXE_86DECgCQprvInNwQcQEJHmvDZZt0dB0PE2Vr6J0OMBrCNstEzvUNXgLRGLS0XA6G9evFBqIB38Jvtj4KWYH5fOCp8hhxs-J1F9u1X5Ev8JHRZDHQpmKLfHH2beN2drC16M354kZuOQoyaUxLy6eMJM1yXr948XKcSpG2A&v=404&_=1',
          src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/51092/36/11835/138581/5d89eec9E161806d2/83a2e56cd03a6817.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          href: '//ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9wcm8ubS5qZC5jb20vbWFsbC9hY3RpdmUvM3pjcEFiQVU3NkFreTRhQzd0QXh6OWlRZm1LQS9pbmRleC5odG1s&log=y4IzFqBDdYNauolpsODJrYNKzry15F3t11DCKwTAf_FfhvmWFRsnPI91DG5x6MZeK1EjyNdZVW15Wtm1dZuwkRhTietasj-pTQYtyenX92ooCFpfOzlC7A_0ajTRM2B_PLFxyAq3kz3GtW61Y_05YlQQUfExkMObJgyAukmn2-rdpjvl_bc62QajMZ__KGdK7Unsmnv3jLzi1FkKOMj1z7x6f99p0LgOkcjtNGmiutLA6ZV7Qbmu1uOawE680QJ6n3sTnX2OAMDO6V7ZK8ccST26-TGhQGetRECeaEvIs2Ls8wOvkMFkeOa3kZXDZav848lGZuikkWaU7iLWubaKU7O3td_opP8tPHvlJYbD2qDOxpLE0anHbkO9OhzlyGXXa5SgrQM9fRAp1EWe35sC7e7Ov44vEkXQxobJBPaZ_lXRV3bR1vxdBZsQ-Tm4PsdycEL_O0IAl6xqQmsHedQq3yeU4x6Vaqt_5poBBVHSLKG_iYbiZZUuox42QAsxGnInJa9xv6HA-jLgYr0ghVidEG0ALnuVqm8-LI3VjpK4PKqJ8Pcu7wst3xOxa7F5LU-annRCKmU7h28w3ElBFFkRYQ&v=404&_=1',
          src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/45103/4/13397/139633/5da2b31bEbf49ec4d/01fd5eda776b8aeb.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          href: '//pro.m.jd.com/mall/active/21Q2cRrpgjKSF7CudWSdy617D75R/index.html?innerAnchor=6999700_100007944910_8932643_100004568523_100002300293&focus=4',
          src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/77235/4/13135/95031/5da40b76E4bac17fb/64a9ac226f3f2ad6.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          href: '//ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9zaG9wLm0uamQuY29tLz9zaG9wSWQ9ODUwMzg&log=D58rhPy_cq1WgH_tNy0bJvMugHkG2QMkvbiZS6oRI3E_QufKuyHvY9yYingVZSsQfkmRTVIibwtZqrTrdSdPS9oaXc5dPx63kGOGgBTreFWWFT2mDXXOmmUdfhqhnbb1U9hNEZDbers7eu8aH0PtDtpGi9DHDoSaOYkCnkMSCpBErdzQvgwZX-YeiL7-FJfzFoVX2O2u-5ot0P2EsCyZCjhZtpbhWaILwwYNGlMu1t6nHeasFDlTsIkECX46j71kpexT0bJJ-02WKTrHBcoCN_8x5eBdookvW9X-34DXEwgCfXMDjk7-Mxpq7SWyHnQb5j19j_IazagWXM7x40k7pOrLNHBM1P7_sVVat09Qp6ZncwF7DVzVm3edTkA33NiawK6mrUSP2s115Pn4kwtUZw8AuKhhFOELyhNbI26BvPgCss4JUTg0Vv9ujfHeOEg5HUvWisEoq8XK_8lrzq-m3a-6du48Qi2MhNlgmWDsoKrT9eB2WoU6iTJOvf5Rew_XKV50jpnXZDdY6xYDAj13tzoDmEJJpfmjr7eIT7TkQUr4_uCKP5f-eb5Rob0C2Fe98wRGq5HzR7R7ogmvhodv4y8bY6hA0Io-o0jYe1zd9A0&v=404&_=1',
          src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/67256/30/13052/145623/5da45e52E0676f57d/b2dd2d09a2f31ac2.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          href: '//h5.m.jd.com/babelDiy/Zeus/3a9Q8JhSik8yfwwjai9WWaessRZt/index.html',
          src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/31162/17/1128/101786/5c46ead8E22ee9740/f66061da227c1965.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          href: '//pro.m.jd.com/mall/active/4VZSsk2oEQZpdhzC4f856iAmMUpE/index.html',
          src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/63966/10/12736/40560/5d9ff780E77691ed8/8b713c57110dd55d.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        }
      ],
      enters: [
        {
          href: 'https://m.jr.jd.com/mjractivity/rn/couponCenter/index.html?RN=couponCenter&from=wtmzhan&sid=',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          title: '优惠券'
        },
        {
          href: 'https://m.jr.jd.com/spe/qyy/main/index.html?userType=1126',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
          title: '领福利'
        },
        {
          href: 'https://m.jr.jd.com/spe/qyy/hzq/index.html?usertype=1176&mz&sid=',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
          title: '抢钢镚'
        },
        {
          href: 'https://m.jr.jd.com/mjractivity/rn/rn_bt_raise/index.html?RN=rn_bt_raise',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          title: '白条提额'
        },
        {
          href: 'https://m.jr.jd.com/ck/dingqicunkuan/record.html?sid=',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
          title: '工资理财'
        },
        {
          href: 'https://z.m.jd.com/newIndex.html?jrm',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
          title: '众筹'
        },
        {
          href: 'https://m.jr.jd.com/btyingxiao/advertMoney/html/home.html?from=jrmz',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/36242/13/119/12214/5cb06492E0c73a66f/a284f91242e27af1.png?width=90&height=90',
          title: '免费领京豆'
        },
        {
          href: 'https://m.jr.jd.com/btyingxiao/marketing/html/index.html?from=Jrmz',
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/23337/6/15445/8974/5cb064c2E0cadac1d/c533bfe4da578fe7.png?width=90&height=90',
          title: '免息红包'
        }
      ],
      sliderClassNames: ''
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import "../../common/styles/element.scss";
  .h-slider {
    .list {
      @include list(row);
      flex-wrap: wrap;
      background-color: #fff;
      padding-top: 40px;
      justify-items: center;
      justify-content: space-around;
      a {
        text-decoration: none;
      }
      .item {
        text-align: center;
        width: 25%;
        padding-bottom: 20px;
        img {
          display: inline-block;
          width: 90px;
          height: 90px;
        }
        h4 {
          font-size: 26px;
          margin-top: 12px;
          color: #666;
        }
      }
    }
  }
</style>
