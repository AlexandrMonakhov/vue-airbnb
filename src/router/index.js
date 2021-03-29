import Vue from 'vue'
import VueRouter from 'vue-router'

import Help from '../pages/Help'
import Host from '../pages/Host'
import Login from '../pages/Login'
import Sign from '../pages/Sign'
import Homes from '../pages/Homes'
import Experiences from '../pages/Experiences'
import Restaurants from '../pages/Restaurants'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/host',
      name: 'Host',
      component: Host
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/homes',
      name: 'Homes',
      component: Homes
    },
    {
      path: '/experiences',
      name: 'Experiences',
      component: Experiences
    },
    {
      path: '/restaurants',
      name: 'Restaurants',
      component: Restaurants
    }
  ]
})
