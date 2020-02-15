<template>
  <div class="recommend">

      <!-- 推荐页轮播图组件 -->
      <recommend-slider :swiperList="swiperList"></recommend-slider>

  </div>
</template>

<script>
  import RecommendSlider from './slider';

  import { SUCC_CODE } from 'api/config.js';

  export default {
    name: 'Recommend',
    components: {
      RecommendSlider

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
  }
  .bannerList01-buttom {
    display: block;
    width: 7.2rem;
    height: 4.4rem;
  }
}
// shoplist01部分
.shoplist01 {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0.12rem;
  border-bottom: 0.02rem solid rgb(206, 206, 206);
  .shop01-item {
    width: 3.4rem;
    &:nth-child(2n) {
      margin-left: 0.12rem;
      margin-bottom: 0.0666667rem;
    }
    &:last-child {
      margin-bottom: 0;
    }
    a {
      display: block;
      .shop01-top {
        width: 3.42rem;
        overflow: hidden;
        .top-img {
          width: 3.44rem;
          height: 2.8rem;
        }
      }
      .shop01-buttom {
        width: 3.42rem;
        padding: 0.2rem 0.27rem;
        text-align: center;
        .name {
          font-size: 0.28rem;
          color: rgba(0, 0, 0, 0.87);
          @include ellipsis();
        }
        .brief {
          margin-top: 0.06rem;
          font-size: 0.22rem;
          line-height: 0.3rem;
          color: rgba(0, 0, 0, 0.54);
          @include ellipsis();
        }
        .price {
          font-size: 0.28rem;
          color: #ea625b;
          height: 1.5em;
          line-height: 1.5em;
          position: relative;
          display: inline-block;
          padding-left: 0.5em;
          &::before {
            content: "\A5";
            position: absolute;
            left: 0;
            top: 0;
            font-size: 0.76em;
          }
          span:nth-child(2) {
            display: inline-block;
            margin-left: 0.04rem;
            font-size: 0.2rem;
          }
          .org_price {
            position: relative;
            display: inline-block;
            margin: 0 0.1rem;
            padding-left: 0.5em;
            font-size: 0.22rem !important;
            color: rgba(0, 0, 0, 0.54);
            &::before {
              content: "\A5";
              position: absolute;
              left: 0;
              top: 0;
              font-size: 0.76em;
            }
          }
        }
        .btn {
          width: 2rem;
          background: #ea625b;
          border-radius: 0.05rem;
          text-align: center;
          color: #fff;
          font-size: 0.24rem;
          padding: 0.16rem 0;
          margin: 0 auto;
          font-weight: 700;
        }
      }
    }
  }
}
// 更多米家产品部分
.more-mi {
  background: #fff;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.28rem;
  text-align: center;
  a {
    display: block;
  }
}
// shoplist04部分
.shoplist04 {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 0.02rem solid rgb(206, 206, 206);
  .shop04-item {
    width: 3.6rem;
    &:nth-child(2n) {
      width: 3.5rem;
      margin-left: 0.04rem;
    }
    a {
      display: block;
      .shop04-top {
        width: 3.6rem;
        height: 3.6rem;
        .top-img {
          display: block;
          width: 3.6rem;
          height: 3.6rem;
        }
      }
      .shop01-buttom {
        padding: 0.2rem 0.27rem;
        text-align: left;
        .name {
          font-size: 0.28rem;
          color: rgba(0, 0, 0, 0.87);
          @include ellipsis();
        }
        .brief {
          margin-top: 0.06rem;
          font-size: 0.22rem;
          line-height: 0.3rem;
          color: rgba(0, 0, 0, 0.54);
          @include ellipsis();
        }
        .price {
          font-size: 0.28rem;
          color: #ea625b;
          height: 1.5em;
          line-height: 1.5em;
          position: relative;
          display: inline-block;
          padding-left: 0.5em;
          &::before {
            content: "\A5";
            position: absolute;
            left: 0;
            top: 0;
            font-size: 0.76em;
          }
          .org_price {
            position: relative;
            display: inline-block;
            margin: 0 0.1rem;
            padding-left: 0.5em;
            font-size: 0.22rem;
            color: rgba(0, 0, 0, 0.54);
            &::before {
              content: "\A5";
              position: absolute;
              left: 0;
              top: 0;
              font-size: 0.76em;
            }
          }
        }
      }
    }
  }
}
// shoplist05部分
.shoplist05 {
  border-bottom: 0.02rem solid rgb(206, 206, 206);
  .shop05 {
    width: 100%;
    display: flex;
    .left {
      width: 3.6rem;
      height: 3.6rem;
      img {
        display: block;
        width: 3.6rem;
        height: 3.6rem;
      }
    }
    .right {
      width: 3.6rem;
      height: 3.6rem;
      padding: 0.64rem 0.12rem 0 0.32rem;
      text-align: left;
      .name {
        font-size: 0.28rem;
        color: rgba(0, 0, 0, 0.87);
        @include ellipsis();
      }
      .brief {
        margin-top: 0.06rem;
        font-size: 0.22rem;
        line-height: 0.35rem;
        color: rgba(0, 0, 0, 0.54);
      }
      .price {
        font-size: 0.28rem;
        color: #ea625b;
        height: 1.5em;
        line-height: 1.5em;
        position: relative;
        display: inline-block;
        padding-left: 0.5em;
        margin-top: 0.2rem;
        &::before {
          content: "\A5";
          position: absolute;
          left: 0;
          top: 0;
          font-size: 0.76em;
        }
        .org_price {
          position: relative;
          display: inline-block;
          margin: 0 0.1rem;
          padding-left: 0.5em;
          font-size: 0.22rem;
          color: rgba(0, 0, 0, 0.54);
          &::before {
            content: "\A5";
            position: absolute;
            left: 0;
            top: 0;
            font-size: 0.76em;
          }
        }
      }
    }
  }
}
// shoplist06部分
.shoplist06 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  a {
    display: block;
    img {
      width: 3.58rem;
      height: 4.8rem;
    }
    &:nth-child(2n) {
      margin-left: 0.04rem;
      margin-bottom: 0.04rem;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
// bannerList06部分
.bannerList06-buttom {
  height: 1.06rem;
  width: 7.2rem;
}
</style>
