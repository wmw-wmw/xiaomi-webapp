<template>
  <div id="app" class="g-container">
    <!-- 视图区 -->
    <div class="g-view-container">
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

  export default {
    name: 'App',
    components: {
      Tabbar
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
}
</style>
