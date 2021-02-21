<!--
 * @Author: your name
 * @Date: 2021-02-21 07:22:30
 * @LastEditTime: 2021-02-22 07:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-base-demo\src\components\PageHeader.vue
-->
<template>
    <el-row class="header-row">
        <el-col :span="18">
            <img src="@/assets/logo.png" class="logo" alt="">
            <el-menu
                class="menu"
                mode="horizontal"
                background-color="#333"
                text-color="#fff"
                active-text-color="fff"
                :router="true"
            >
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/post">发表文章</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="6">
            <div class="nav-right">
                <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#333"
                    text-color="#fff"
                    active-text-color="fff"
                >
                    <el-menu-item index="login">
                        <router-link to="/login">登录</router-link>
                    </el-menu-item>
                    <el-menu-item index="reg">
                        <router-link to="/reg">注册</router-link>
                    </el-menu-item>
                    <el-submenu index="profile">
                        <template slot="title">张三</template>
                        <el-menu-item index="logout">退出登录</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import {createNamespacedHelpers} from 'vuex';
let {mapState} = createNamespacedHelpers('user');
export default {
    computed: {
        ...mapState(['haspremission'])
    }
}
</script>
<style lang="scss" scoped>
.header-row{
    height: 100%;
    .logo{
        margin: 5px;
        height: 50px;
    }
    .menu,
    .logo{
        display: inline-block;
    }
    .nav-right{
        float: right;
        li{
            display: inline-block;
            text-align: center;
            line-height: 60px;
        }
        a{
            color: #fff;
        }
    }
}
</style>