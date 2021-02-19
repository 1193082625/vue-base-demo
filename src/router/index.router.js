/*
 * @Author: your name
 * @Date: 2021-02-20 07:33:16
 * @LastEditTime: 2021-02-20 07:37:47
 * @LastEditors: Please set LastEditors
 * @Description: 项目公共路由
 * @FilePath: \vue-base-demo\src\router\index.router.js
 */
export default [
    {
        path: '/',
        component: () => import(/*webpackChunkName: 'home'*/'@/views/Home.vue')
    },
    { // 这个*会被处理到所有路由的最后面
        path: '*',
        component: () => import(/*webpackChunkName: '404'*/'@/views/404.vue')
    }
]