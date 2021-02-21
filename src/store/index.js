/*
 * @Author: your name
 * @Date: 2021-02-20 06:40:25
 * @LastEditTime: 2021-02-21 09:25:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-base-demo\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import rootModule from './rootModule';
Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/);
files.keys().forEach(key => {
  let store = files(key).default;
  let moduleName = key.replace(/^\.\//, '').replace(/\.js$/, '');
  let modules = rootModule.modules = (rootModule.modules || {});
  modules[moduleName] = store;
  modules[moduleName].namespaced = true;
})

let store = new Vuex.Store(rootModule)
console.log(store);
export default store;