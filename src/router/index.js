/**
 * Project router - used in case we wanted to expand the project in
 * the future and add more features & routes.
 */

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
