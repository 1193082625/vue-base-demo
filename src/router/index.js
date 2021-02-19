/*
 * @Author: your name
 * @Date: 2021-02-20 06:40:25
 * @LastEditTime: 2021-02-20 07:44:56
 * @LastEditors: Please set LastEditors
 * @Description: 路由入口文件
 * @FilePath: \vue-base-demo\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * 读取所有路由文件，拼接对应路由挂载到当前项目
 * require.context(path, Boolean, REG)类似前端的读写文件
 *  path: 要读取的路径
 *  Boolean：是否读取子目录
 *  REG: 匹配的正则
 */
const files = require.context('./', false, /\.router.js$/);
const routes = [];
files.keys().forEach(key => {
    routes.push(...files(key).default);
})

const router = new VueRouter({
    routes
})

export default router
