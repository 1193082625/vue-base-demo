/*
 * @Author: your name
 * @Date: 2021-02-21 08:03:44
 * @LastEditTime: 2021-02-21 09:55:17
 * @LastEditors: Please set LastEditors
 * @Description: 将axios进行二次封装
 * @FilePath: \vue-base-demo\src\utils\request.js
 */
import config from '@/config/';
import axios from 'axios';
class HttpRequest {
    constructor() {
        // 增加实例属性 后台接口的路径 区分开发模式和生产模式
        this.baseURL = config.baseURL;
        this.timeout = 3000; // 3s后请求超时
    }
    setInterceptors(instance) {
        instance.interceptors.request.use(config => {
            // 一般增加一些token属性等
            return config;
        });
        instance.interceptors.response.use(res => {
            if(res.status === 200) {
                return Promise.resolve(res.data);
            } else {
                return Promise.reject(res.data.msg);
            }
        }, err => {
            switch(err.response.status) {
                case 401:
                    console.log(err);
                    break;
                default:
                    break;
            }
            return Promise.reject(err);
        })
    }
    mergeOptions(options) {
        return {
            baseURL: this.baseURL,
            timeout: this.timeout,
            ...options
        }
    }
    request(options) {
        // 每个实例的拦截器和其他人无关，如果使用全局的实例，想给每次请求单独配置拦截器就做不到
        const instance = axios.create(); // 创建axios实例
        this.setInterceptors(instance);
        const opts = this.mergeOptions(options);
        return axios(opts);
    }
    get(url, config) {
        return this.request({
            methods: 'get',
            url,
            ...config // get中参数可以直接展开
        })
    }
    post(url, data) {
        return this.request({
            methods: 'post',
            url,
            data // post要求必须传入data属性
        })
    }
}
export default HttpRequest;