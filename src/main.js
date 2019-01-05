// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResources from 'vue-resource'

import TopSection from './components/TopSection'
import FooterContact from './components/FooterContact'

require('./assets/scss/main.scss')

Vue.component('TopSection', TopSection)
Vue.component('FooterContact', FooterContact)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
