<template>
  <div class="recommend">
    <!-- 推荐页轮播图组件 -->
    <recommend-slider :swiperList="swiperList"></recommend-slider>
    <!-- 推荐页nav组件 -->
    <recommend-nav :iconList="iconList"></recommend-nav>
    <!-- 广告图片和商品展示部分 -->
    <!-- bannerList部分 -->
    <div class="bannerList" v-if="bannerList.length">
      <div class="left-items">
        <a href="#">
          <img :src="bannerList[0].imgUrl" />
        </a>
      </div>
      <div class="right-items">
        <a href="#" class="right-item">
          <img :src="bannerList[1].imgUrl" />
        </a>
        <a href="#">
          <img :src="bannerList[2].imgUrl" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import RecommendSlider from './slider';
  import RecommendNav from './nav';

  import { SUCC_CODE } from 'api/config.js';

  export default {
    name: 'Recommend',
    components: {
      RecommendSlider,
      RecommendNav
    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        bannerList: [],
        bannerList01: [],
        shoplist01: [],
        bannerList02: [],
        shoplist02: [],
        bannerList03: [],
        shoplist03: [],
        bannerList04: [],
        shoplist04: [],
        bannerList05: [],
        shoplist05: [],
        shoplist06: [],
        bannerList06: [],
        isShowBackTop: false
      };
    },
    created() {
      this.getRecommend();
    },
    methods: {
      // 获取推荐页数据
      async getRecommend() {
        const { data: res } = await this.$http.get('recommend');
        if (res.code === SUCC_CODE) {
          this.swiperList = res.data.swiperList;
          this.iconList = res.data.iconList;
          this.bannerList = res.data.bannerList;
          this.bannerList01 = res.data.bannerList01;
          this.shoplist01 = res.data.shoplist01;
          this.bannerList02 = res.data.bannerList02;
          this.shoplist02 = res.data.shoplist02;
          this.bannerList03 = res.data.bannerList03;
          this.shoplist03 = res.data.shoplist03;
          this.bannerList04 = res.data.bannerList04;
          this.shoplist04 = res.data.shoplist04;
          this.bannerList05 = res.data.bannerList05;
          this.shoplist05 = res.data.shoplist05;
          this.shoplist06 = res.data.shoplist06;
          this.bannerList06 = res.data.bannerList06;
        }
      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 500);
      },
      // 监听滚动
      contentScroll(pos) {
        this.isShowBackTop = -pos.y > 850;
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.recommend {
  position: relative;
  height: 100%;
  background-color: $bgc-recom;
}
.wrapper {
  width: 7.2rem;
  margin: 0 auto;
  position: absolute;
  top: 0;
  bottom: 52px;
  left: 0;
  right: 0;
  overflow: hidden;
}
// bannerList部分
.bannerList {
  display: flex;
  width: 7.2rem;
  height: 5.08rem;
  margin-top: 0.16rem;
  div {
    flex: 1;
    a {
      display: block;
      img {
        width: 100%;
      }
    }
  }
  .left-items {
    margin-right: 0.04rem;
  }
  .right-item {
    margin-bottom: 0.04rem;
  }
}
</style>
