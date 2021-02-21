/*
 * @Author: your name
 * @Date: 2021-02-21 08:04:31
 * @LastEditTime: 2021-02-21 08:51:55
 * @LastEditors: Please set LastEditors
 * @Description: 相关环境配置文件
 * @FilePath: \vue-base-demo\src\config\index.js
 */
export default{
    // 开发打包是默认的两个环境
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
}
