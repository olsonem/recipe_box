// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueFire from 'vuefire';
Vue.use(VueFire);

// vue-Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

// font awesome
import Icon from 'vue-awesome/components/Icon';
Vue.component('icon', Icon)


let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
