<!--
 * @Author: your name
 * @Date: 2021-02-20 07:30:59
 * @LastEditTime: 2021-02-21 09:35:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-base-demo\src\views\Home.vue
-->
<template>
    <div>
        <el-carousel
            :interval="4000"
            type="card"
            height="360px"
        >
            <el-carousel-item v-for="item in sliders" :key="item._id">
                <img :src="item.url" style="width: 100%;height: 100%;" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
import * as types from '../store/action-types';
export default {
    computed: {
        ...mapState(['sliders'])
    },
    methods: {
        ...mapActions([types.SET_SLIDERS])
    },
    mounted() {
        if(!this.sliders.length) {
            this[types.SET_SLIDERS]();
        }
    }
}
</script>