<template>
  <div class="ProjectWeather">
    <van-swipe :autoplay="3000"
               indicator-color="white">
      <van-swipe-item>
        <div class="project">1</div>
        <div class="weather"></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="project">2</div>
        <div class="weather"></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="project">3</div>
        <div class="weather"></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="project">4</div>
        <div class="weather"></div>
      </van-swipe-item>
    </van-swipe>

  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
export default {
  name: 'ProjectWeather',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.ProjectWeather {
  width: 100%;
  height: 1125px;
  .van-swipe {
    height: 1125px;
    .van-swipe-item {
      height: 1125px;
      color: #fff;
      line-height: 1125px;
    }
    .van-swipe__indicators {
      top: 15px;
      .van-swipe__indicator {
        width: 16px;
        height: 16px;
      }
      .van-swipe__indicator:not(:last-child) {
        margin-right: 32px;
      }
    }
  }
  .project {
    width: 100%;
    height: 637px;
    background: linear-gradient(
      180deg,
      rgba(1, 122, 253, 1) 0%,
      rgba(0, 178, 245, 1) 100%
    );
  }
  .weather {
    width: 100%;
    height: 488px;
  }
}
</style>
