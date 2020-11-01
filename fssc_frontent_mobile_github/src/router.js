/*global Vue*/
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Index
    }
  ]
})
