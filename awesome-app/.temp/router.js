import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home
    }
  ]
})
