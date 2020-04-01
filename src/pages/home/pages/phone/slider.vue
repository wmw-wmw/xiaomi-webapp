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
    name: 'PhoneSlider',
    components: {
      slider,
      swiperSlide,
      sliderLoading
    },
    data() {
      return {
        swiperList: [
          {
            id: '0001',
            imgUrl:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5d277f695cf94702eb8c21158c39b9.jpg?thumb=1&w=720&h=360',
            path: ''
          },
          {
            id: '0002',
            imgUrl:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff3e608e7f4587b5bf62ea59efaf26e9.jpg?thumb=1&w=720&h=360',
            path: ''
          },
          {
            id: '0003',
            imgUrl:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27392573fcdca52229bb6b1f44dae5e5.jpg?thumb=1&w=720&h=360',
            path: ''
          }
        ]
      };
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
