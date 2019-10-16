<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <li class="nav-item" v-for="item in items" :key="item.href">
        <router-link :to="item.href">
          <img :class="item.title ? 'item-icon' : 'item-icon-notitle'" :src="item.icon" />
          <p class="text" v-if="item.title">{{ item.title }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import "../../common/styles/element.scss";
  .nav-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background-color: #ffffff;
    z-index: 100;
    margin-top: 100px;
    .nav-list {
      @include list(row);
      justify-items: center;
      justify-content: space-around;
      .nav-item {
        flex: 1;
        text-align: center;
        .item-icon {
          margin: 10px 0;
          width: 50px;
          height: 50px;
        }
        .item-icon-notitle {
          width: 80px;
          height: 80px;
          margin: 10px 0;
        }
        .text {
          color: #666;
          font-size: 22px;
        }
      }
    }
  }
</style>
