/*
 * @Author: your name
 * @Date: 2021-02-20 07:34:31
 * @LastEditTime: 2021-02-20 07:38:46
 * @LastEditors: Please set LastEditors
 * @Description: 模块路由——用户
 * @FilePath: \vue-base-demo\src\router\user.router.js
 */
export default [
    {
        path: '/reg',
        component: () => import(/*webpackChunkName: 'reg'*/'@/views/user/Reg.vue')
    },
    { // 这个*会被处理到所有路由的最后面
        path: '/login',
        component: () => import(/*webpackChunkName: 'login'*/'@/views/user/Login.vue')
    }
]