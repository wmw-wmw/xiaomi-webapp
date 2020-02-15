<template>
  <div>
    <!-- 轮播图loading组件  -->
    <slider-loading v-if="!swiperList.length"></slider-loading>
    <slider>
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <a :href="item.path" class="swiper-a">
          <img class="swiper-img" :src="item.imgUrl" />
        </a>
      </swiper-slide>
    </slider>
  </div>
</template>

<script>
  import slider from 'base/slider';
  import { swiperSlide } from 'vue-awesome-swiper';
  import sliderLoading from 'base/loading';

  export default {
    name: 'RecommendSlider',
    components: {
      slider,
      swiperSlide,
      sliderLoading
    },
    props: {
      swiperList: Array
    }
  };
</script>

<style lang="scss" scoped>
.swiper-a {
  display: block;
  width: 7.2rem;
  height: 3.6rem;
  .swiper-img {
    width: 100%;
  }
}
</style>
