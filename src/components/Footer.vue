<template>
  <van-tabbar v-model="active"
              class="footerTab"
              route>
    <van-tabbar-item icon="home-o"
                     replace
                     to="/homePage">概况</van-tabbar-item>
    <van-tabbar-item icon="search"
                     replace
                     to="/homeDigitScene">数字工地</van-tabbar-item>
    <van-tabbar-item icon="friends-o"
                     replace
                     to="/homeIntelligentMonitoring">视频监控</van-tabbar-item>
    <van-tabbar-item icon="setting-o"
                     replace
                     to="/projectCoordination">项目协同</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
export default {
  name: 'Footer',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footerTab {
  height: 75px;
  background: #ccc;
}
</style>
