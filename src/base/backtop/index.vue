<template>
  <div class="backtop-container">
    <a class="top" href="#">
      <img src="./img/top.gif" />
    </a>
    <a class="bottom" href="javascript:;" @click="backTop">
      <img src="./img/bottom.png" />
    </a>
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
    methods: {
      backTop() {
        this.$emit('backTop');
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

// 返回顶部按钮部分
.backtop-container {
  position: fixed;
  z-index: $backtop-z-index;
  right: 0.26rem;
  bottom: 1.4rem;
  .top,
  .bottom {
    display: block;
    width: 1.12rem;
    height: 1.12rem;
    margin: 0.1rem auto 0;
    img {
      width: 100%;
    }
  }
  .bottom {
    width: 0.7rem;
    height: 0.7rem;
  }
}
</style>
