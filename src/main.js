/*
 * @Author: your name
 * @Date: 2021-02-20 06:40:25
 * @LastEditTime: 2021-02-21 08:05:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-base-demo\src\main.js
 */
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './utils/request';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
