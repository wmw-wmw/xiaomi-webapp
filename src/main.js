import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastclick from 'fastclick';
import axios from 'axios';

import 'assets/js/rem.js';
import 'assets/scss/index.scss';
import 'swiper/dist/css/swiper.css';

// 解决300毫秒延迟
fastclick.attach(document.body);

Vue.config.productionTip = false;

// 请求的根路径
axios.defaults.baseURL = 'http://localhost:8080/';
// 挂载到Vue原型对象上
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
