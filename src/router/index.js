import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/components/WelcomePage'
import Error404 from '@/components/Error404'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: WelcomePage
    },

    { path: '*', component: Error404 }
  ]
})
