/*
 * @Author: your name
 * @Date: 2021-02-21 09:10:17
 * @LastEditTime: 2021-02-21 09:53:04
 * @LastEditors: Please set LastEditors
 * @Description: 根模块
 * @FilePath: \vue-base-demo\src\store\rootModule.js
 */
import {getSlider} from '../api/public';
import * as types from './action-types';
export default {
    state: {
        sliders: []
    },
    mutations: {},
    actions: {
        async [types.SET_SLIDERS]({commit}) {
            let {data} = await getSlider();
            console.log(data);
        }
    },
    modules: {}
}