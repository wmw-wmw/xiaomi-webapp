<template>
  <div class="category">
    <!-- header区 -->
    <navbar class="header">
      <template v-slot:left>
        <div @click="goHome">
          <a href="javascript:;" class="header-left">
            <i></i>
          </a>
        </div>
      </template>
      <template v-slot:center>
        <div class="header-middle">
          <div>分类</div>
        </div>
      </template>
      <template v-slot:right>
        <router-link tag="div" to="/search">
          <a href="javascript:;" class="header-right">
            <i></i>
          </a>
        </router-link>
      </template>
    </navbar>
    <!-- tab栏区 -->
    <div class="tab">
      <ul class="tab-list" ref="tabList">
        <a href="javascript:;" v-for="(item, index) in category" :key="index">
          <li
            class="tab-list-item"
            @click="tabChange(item.id,index)"
            :class="{'active': item.id == tabId }"
          >
            <span>{{item.name}}</span>
          </li>
        </a>
        <!-- 占位标签 -->
        <a class="list-item-last"></a>
      </ul>
    </div>
    <!-- main主体区 -->
    <div class="main">
      <scroll class="wrapper" :data="category" ref="scroll">
        <!-- 一层循环 -->
        <div
          class="section"
          v-for="(item, index) in category"
          :key="index"
          ref="section"
        >
          <a href="#" class="pic">
            <img :src="item.mainImgUrl" v-if="item.mainImgUrl" />
          </a>
          <!-- 二层循环 -->
          <div class="item-list" v-for="(products, list) in item.list" :key="list">
            <div class="products-title">
              <span>{{products.title}}</span>
            </div>
            <!-- 三层循环 -->
            <div class="group">
              <div class="product" v-for="(product, p) in products.items" :key="p">
                <a href="#">
                  <img v-lazy="product.img_url" />
                  <span>{{product.product_name}}</span>
                </a>
              </div>
            </div>
            <!-- 尾图 -->
            <div v-if="item.EnterImgUrl&&item.name===products.title">
              <a href="#">
                <img :src="item.EnterImgUrl" class="enterimg" />
              </a>
            </div>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import { SUCC_CODE } from 'api/config.js';
  import Navbar from 'base/navbar';
  import scrollToMiddle from 'api/scrolltop';
  import Scroll from 'base/scroll';

  export default {
    name: 'Category',
    components: {
      Navbar,
      Scroll
    },
    data() {
      return {
        category: [],
        tabId: '653'
      };
    },
    created() {
      this.Category();
    },
    methods: {
      // 获取category数据
      async Category() {
        const { data: res } = await this.$http.get('category');
        if (res.code === SUCC_CODE) {
          this.category = res.data;
        }
      },
      tabChange(id, index) {
        // 防止多次点击
        if (this.tabId === id) {
          return;
        }
        // tab栏切换
        this.tabId = id;
        // 滑动tab栏
        const element = this.$refs.tabList;
        scrollToMiddle(element, element.children[index]);
        // 回到顶部
        this.$refs.scroll.scrollToElement(this.$refs.section[index], 0);
      },
      goHome() {
        this.$router.push('/home');
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.category {
  overflow: hidden;
  width: 7.2rem;
  height: 100%;
  background-color: $bgc-theme;
  margin: 0 auto;
  padding-bottom: 52px;
  // header区
  .header {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    font-size: 0.3rem;
    background: #f2f2f2;
    color: #666;
    &-left {
      display: block;
      width: 0.6rem;
      i {
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        line-height: 0.6rem;
        background: url("./img/header-left.png") no-repeat center;
        background-size: cover;
      }
    }
    &-middle {
      text-align: center;
    }
    &-right {
      display: block;
      width: 0.6rem;
      i {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        line-height: 0.6rem;
        background: url("./img/search.png") no-repeat center;
        background-size: cover;
      }
    }
  }
  // tab栏区
  .tab {
    position: fixed;
    top: 50px;
    bottom: 52px;
    left: 0;
    width: 1.52rem;
    border-right: 1px solid #efefef;
    overflow: hidden;
    &-list {
      z-index: 90;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -0.3rem;
      padding: 0.2rem 0.3rem 0.2rem 0;
      background: #fefefe;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      a {
        display: block;
        .tab-list-item {
          height: 0.9rem;
          font-size: 0.34rem;
          color: #3c3c3c;
          line-height: 0.9rem;
          text-align: center;
          transform: scale(0.76);
          transform-origin: center center;
          transition: transform 0.1s linear;
          span {
            display: block;
            height: 0.9rem;
            overflow: hidden;
          }
        }
        .active {
          color: #fb7d34;
          transform: scale(1);
        }
      }
      .list-item-last {
        width: 0.1rem;
        height: 0.1rem;
      }
    }
  }
  // main主体区
  .main {
    position: relative;
    top: 50px;
    left: 1.84rem;
    width: 5.04rem;
    height: 100%;
    .wrapper {
      position: absolute;
      top: 0;
      bottom: 52px;
      left: 0;
      right: 0;
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }
    .section {
      .pic {
        display: block;
        img {
          display: block;
          height: 2rem;
          width: 5rem;
        }
      }
      .products-title {
        background: #fff;
        font-size: 0.28rem;
        color: #3c3c3c;
        text-align: center;
        font-weight: 400;
        margin-top: 0.2rem;
        height: 1.28rem;
        line-height: 1.28rem;
        overflow: hidden;
        span {
          position: relative;
          &::before,
          &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 0.4rem;
            border-top: 1px solid #e0e0e0;
            transform: translate3d(-150%, -50%, 0);
          }
          &:after {
            left: auto;
            right: 0;
            transform: translate3d(150%, -50%, 0);
          }
        }
      }
      .enterimg {
        display: block;
        height: 0.8rem;
        width: 5rem;
      }
      .group {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: -0.06rem 0 0;
        .product {
          width: 33.333333333333336%;
          text-align: center;
          margin-top: 0.2rem;
          margin-bottom: 0.3rem;
          overflow: hidden;
          a {
            display: block;
            width: 100%;
            text-align: center;
            img {
              width: 1rem;
              height: 1rem;
              margin: 0 auto;
            }
            span {
              display: block;
              margin-top: 0.28rem;
              font-size: 0.23rem;
              color: rgba(0, 0, 0, 0.54);
              @include ellipsis();
            }
          }
        }
      }
    }
  }
}
</style>
