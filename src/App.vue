<!--
 * @Author: your name
 * @Date: 2021-02-20 06:40:25
 * @LastEditTime: 2021-02-21 08:02:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-base-demo\src\App.vue
-->
<template>
  <div id="app">
    <!-- el-container 会检测内部是否有 el-header 和 el-footer -->
    <el-container>
      <el-header>
        <PageHeader></PageHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <PageFooter></PageFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue';
  import PageFooter from '@/components/PageFooter.vue';
  export default{
    components: {
      PageHeader,
      PageFooter
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.el-header{
  background: #333;
}
.el-footer{
  background: #333;
}
.el-main{
  min-height: calc(100vh - 120px);
}
</style>
