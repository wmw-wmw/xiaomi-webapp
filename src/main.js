import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import fastclick from 'fastclick';
import axios from 'axios';
import VueLazyload from 'vue-lazyload';

import 'assets/js/rem.js';
import 'assets/scss/index.scss';
import 'swiper/dist/css/swiper.css';
// 解决300毫秒延迟
fastclick.attach(document.body);
// 实现图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.5
});

Vue.config.productionTip = false;

// 配置请求的根路径
axios.defaults.baseURL = 'http://localhost:8080/';
// 挂载到Vue原型对象上
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
