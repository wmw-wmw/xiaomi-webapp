<template>
  <!-- shoplist01部分 -->
  <div class="shoplist01">
    <div class="shop01-item" v-for="(item, index) in shoplist01" :key="index">
      <a href="#">
        <div class="shop01-top">
          <img v-lazy="item.imgUrl" class="top-img" />
          <div class="tag">
            <img v-lazy="item.product_tag_array" v-if="item.product_tag_array"/>
          </div>
        </div>
        <div class="shop01-buttom">
          <div class="name">{{item.product_name}}</div>
          <div class="brief">{{item.product_brief}}</div>
          <div class="price">
            <span>{{item.product_price}}</span>
            <span>起</span>
            <span class="org_price" v-if="item.product_price!==item.product_org_price">
              <s>{{item.product_org_price}}</s>
            </span>
          </div>
          <div class="btn">立即购买</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      shoplist01: Array
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

// shoplist01部分
.shoplist01 {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fff;
  padding: 0.07rem 0.12rem 0;
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
        position: relative;
        width: 3.42rem;
        overflow: hidden;
        .top-img {
          width: 3.44rem;
          height: 2.8rem;
        }
        .tag {
          position: absolute;
          bottom: 0;
          right: 0;
          img {
            display: inline-block;
            width: 1rem;
            height: auto;
          }
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
</style>
