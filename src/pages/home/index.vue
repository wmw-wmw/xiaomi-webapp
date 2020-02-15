<template>
  <div class="home">
    <!-- 首页头部区 -->
    <header class="header-container">
      <home-header @navChange="navChange"></home-header>
    </header>
    <!-- 推荐页 -->
    <recommend v-show="i[0] == index"></recommend>
    <!-- 手机页 -->
    <phone v-if="i[1] == index"></phone>
    <!-- 智能页 -->
    <intelligence v-if="i[2] == index"></intelligence>
    <!-- 电视页 -->
    <television v-if="i[3] == index"></television>
    <!-- 笔记本页 -->
    <notebook v-if="i[4] == index"></notebook>
    <!-- 家电页 -->
    <electrical v-if="i[5] == index"></electrical>
    <!-- 生活周边页 -->
    <life v-if="i[6] == index"></life>
  </div>
</template>

<script>
  import HomeHeader from './header';
  import Recommend from './pages/recommend';
  import Phone from './pages/phone';
  import Intelligence from './pages/intelligence';
  import Television from './pages/television';
  import Notebook from './pages/notebook';
  import Electrical from './pages/electrical';
  import Life from './pages/life';

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      Recommend,
      Phone,
      Intelligence,
      Television,
      Notebook,
      Electrical,
      Life
    },
    data() {
      return {
        index: '0',
        i: ['0', '1', '2', '3', '4', '5', '6'],
        isShow: false
      };
    },
    methods: {
      // 接收header组件传递的index
      navChange(index) {
        this.index = index;
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.home {
  overflow: hidden;
  width: 7.2rem;
  height: 100%;
  background-color: $bgc-theme;
  padding-top: 1.41rem;
  margin: 0 auto;
  .header-container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: $navbar-z-index;
    width: 100%;
  }
}
</style>
