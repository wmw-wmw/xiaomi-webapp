<template>
  <div class="homeslider">
    <!-- 轮播图组件 -->
    <swiper :options="swiperOption">
      <slot></slot>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper } from 'vue-awesome-swiper';
  export default {
    name: 'slider',
    components: {
      swiper
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        }
      };
    },
    props: {}
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.homeslider /deep/ .swiper-pagination-bullet {
  margin: 0 5px;
  background: rgba(255, 255, 255, 0.8);
}
.homeslider /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
// 解决使用vue-awesome-swiper组件分页器pagination样式设置失效问题
// 解决方案：
//  给父标签设置一个class，
// 在sass/less中使用/deep/样式穿透
// .class /deep/ .swiper-pagination-bullet{
//       background-color: 'red';
// }

.homeslider {
  background: $homeslider;
}
</style>
