<template>
  <div>
    <van-nav-bar title="标题"
                 left-text="返回"
                 right-text="按钮"
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Toast } from 'vant'
Vue.use(NavBar)
Vue.use(Toast)
export default {
  name: 'Header',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
