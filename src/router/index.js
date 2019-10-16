import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../pages/index'
import EarnPage from '../pages/earn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      name: 'index',
      path: '/index',
      component: IndexPage
    },
    {
      name: 'earn',
      path: '/earn',
      component: EarnPage
    }
  ]
})
