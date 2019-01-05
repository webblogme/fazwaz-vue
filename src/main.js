// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResources from 'vue-resource'

import Top from './components/Top'
import Footer from './components/Footer'

require('./assets/scss/main.scss')

Vue.component('Top', Top)
Vue.component('Footer', Footer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
