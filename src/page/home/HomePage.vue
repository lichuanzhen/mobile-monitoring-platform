<template>
  <div class="homePage">
    <ProjectWeather></ProjectWeather>
  </div>
</template>
<script>
import ProjectWeather from './projectWeather/ProjectWeather'
export default {
  name: 'HomePage',
  components: {
    ProjectWeather
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.homePage {
  width: 100%;
  height: 100%;
}
</style>
