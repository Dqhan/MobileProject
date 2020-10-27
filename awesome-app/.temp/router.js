import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import Index from '@/components'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
