import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastclick from 'fastclick';

import 'assets/js/rem.js';
import 'assets/scss/index.scss';
// 解决300毫秒延迟
fastclick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
