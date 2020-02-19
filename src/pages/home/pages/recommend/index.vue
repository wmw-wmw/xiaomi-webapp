<template>
  <div class="recommend">
    <scroll
      class="wrapper"
      :data="shoplist01"
      ref="scroll"
      :probe-type="3"
      :listenScroll="true"
      @scroll="contentScroll"
    >
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
      <!-- bannerList01部分 -->
      <div class="bannerList01" v-if="bannerList01.length">
        <div>
          <a href="#">
            <img class="bannerList01-top" v-lazy="bannerList01[0].imgUrl" />
          </a>
        </div>
        <div>
          <a href="#">
            <img class="bannerList01-buttom" v-lazy="bannerList01[1].imgUrl" />
          </a>
        </div>
      </div>
      <goods :shoplist01="shoplist01"></goods>
      <goods :shoplist01="shoplist01"></goods>
      <goods :shoplist01="shoplist01"></goods>
    </scroll>
    <!-- 返回顶部按钮 -->
    <back-top @backTop="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import RecommendSlider from './slider';
  import RecommendNav from './nav';
  import Scroll from 'base/scroll';
  import Goods from './goods';
  import BackTop from 'base/backtop';

  import { SUCC_CODE } from 'api/config.js';

  export default {
    name: 'Recommend',
    components: {
      RecommendSlider,
      RecommendNav,
      Scroll,
      Goods,
      BackTop
    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        bannerList: [],
        bannerList01: [],
        shoplist01: [],
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
  background-color: #fff;
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

// bannerList01部分
.bannerList01 {
  a {
    display: block;
    width: 7.2rem;
  }
  .bannerList01-top {
    display: block;
    width: 7.2rem;
    height: 2.8rem;
    margin: 0.16rem 0;
  }
  .bannerList01-buttom {
    display: block;
    width: 7.2rem;
    height: 4.4rem;
  }
}
</style>
