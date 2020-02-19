<template>
  <div class="phone">
    <!-- 手机页轮播图组件 -->
    <phone-slider></phone-slider>
    <!-- bannerList01部分 -->
    <div class="bannerList01">
      <a href="#" v-for="(item, index) in bannerList01" :key="index">
        <img v-lazy="item.imgUrl" />
        <div class="info">
          <div class="info-top">
            <div class="name">{{item.product_name}}</div>
            <div class="price">
              <span>{{item.product_price}}</span>
              <span>起</span>
              <span class="org_price" v-if="item.product_price!==item.product_org_price">
                <s>{{item.product_org_price}}</s>
              </span>
            </div>
          </div>
          <div class="info-bottom">
            <div class="brief">{{item.product_brief}}</div>
            <div class="btn">{{item.btn_txt}}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import PhoneSlider from './slider';

  export default {
    name: 'Phone',
    components: {
      PhoneSlider
    },
    data() {
      return {
        bannerList01: [
          {
            id: '0001',
            imgUrl:
              'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bef874f06e7467b43cc4c09dc02d4e81.jpg?thumb=1&w=696&h=436',
            btn_txt: '立即购买',
            product_name: '小米CC9 Pro',
            product_brief: '1亿像素 五摄四闪',
            product_price: '2599',
            product_org_price: '2799'
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.phone {
  height: 100%;
  background: rgb(230, 231, 251);
}
// bannerList01部分
.bannerList01 {
  width: 100%;
  padding: 0 0.12rem;
  a {
    display: block;
    margin: 0.106667rem 0;
    img {
      width: 6.96rem;
      height: 4.36rem;
    }
    .info {
      padding: 0.2rem 0.27rem;
      text-align: left;
      background-color: #fff;
      &-top {
        @include flex-between();
        .name {
          @include ellipsis();
          color: rgba(0, 0, 0, 0.87);
          font-size: 0.32rem;
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
      }
      &-bottom {
        @include flex-between();
        .brief {
          margin-top: 0.06rem;
          font-size: 0.22rem;
          line-height: 0.3rem;
          color: rgba(0, 0, 0, 0.54);
          @include ellipsis();
        }
        .btn {
          width: 2rem;
          background: #ea625b;
          border-radius: 0.05rem;
          text-align: center;
          color: #fff;
          font-size: 0.24rem;
          padding: 0.16rem 0;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
