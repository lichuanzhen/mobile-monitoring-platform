<template>
  <div class="body">
    <!-- <MyHeader></MyHeader> -->
    <router-view />
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyFooter from './Footer'
import MyHeader from './Header'

export default {
  name: 'Body',
  components: {
    MyFooter,
    MyHeader
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
}
</style>
