<template>
  <div id="app" class="g-container">
    <!-- 视图区 -->
    <div class="g-view-container">
      <!-- 公共头部区 -->
      <transition name="g-header">
        <div class="g-header-container" v-if="$route.name==='category'||$route.name==='cart'">
          <g-header></g-header>
        </div>
      </transition>
      <router-view></router-view>
    </div>
    <!-- 底部区 -->
    <div class="g-footer-container">
      <tabbar></tabbar>
    </div>
  </div>
</template>

<script>
  import Tabbar from 'components/tabbar';
  import GHeader from 'components/header';

  export default {
    name: 'App',
    components: {
      Tabbar,
      GHeader
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.g-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .g-view-container {
    height: 100%;
  }
  .g-footer-container {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: $tabbar-z-index;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  .g-header-container {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    font-size: 0.3rem;
    background: #f2f2f2;
    color: #666;
    transition: transform 0.2s ease-out;
  }
  // header动画
  .g-header-enter,
  .g-header-leave-to {
    transform: translateY(-100%);
  }
}
</style>
