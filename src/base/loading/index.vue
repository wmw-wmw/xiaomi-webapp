<template>
  <div class="loading">
    <img src="./loading.gif" alt />
  </div>
</template>

<script>
  export default {
    name: 'sliderLoading'
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.loading {
  position: relative;
  width: 7.2rem;
  height: 3.6rem;
  background: $homeslider;

  img {
    // 让图片水平垂直居中
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 1rem;
  }
}
</style>
