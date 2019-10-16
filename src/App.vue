<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/public/nav-bar'
import JdHeader from '@/components/public/header'
export default {
  name: 'App',
  components: {JdHeader, NavBar}
}
</script>

<style>
  .content {}
</style>
