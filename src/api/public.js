/*
 * @Author: your name
 * @Date: 2021-02-21 09:37:05
 * @LastEditTime: 2021-02-21 09:54:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-base-demo\src\api\public.js
 */
import config from './config/public';
import axios from '@/utils/request';

// 获取轮播图功能
export const getSlider = () => axios.get(config.getSlider);