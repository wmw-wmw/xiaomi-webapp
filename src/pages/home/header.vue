<template>
  <div class="homeheader">
    <!-- 顶部搜索区 -->
    <navbar>
      <template v-slot:left>
        <div class="logo">
          <img src="./img/logo.png" />
        </div>
      </template>
      <template v-slot:center>
        <router-link tag="div" to="/search">
          <div class="header-middle">
            <i class="header-search"></i>
            <div>搜索商品名称</div>
          </div>
        </router-link>
      </template>
      <template v-slot:right>
        <router-link tag="div" to="/user">
          <div class="header-user"></div>
        </router-link>
      </template>
    </navbar>
    <!-- 导航栏隐藏的部分 -->
    <transition name="navhide">
      <div class="nav-hide" v-show="isDisplay">
        <div class="title">全部</div>
        <div class="btn-wrap">
          <div
            class="btn-item"
            v-for="(item, index) in tabs"
            :key="item.page_id"
            @click="navChange(index)"
            :class="{'btn-item-active': index == navListActiveIndex }"
          >
            <span @click="navDisplay">{{item.name}}</span>
          </div>
        </div>
      </div>
    </transition>
    <!-- 导航栏 -->
    <div class="nav-wrap">
      <div class="nav" ref="nav">
        <div class="nav-item" v-for="(item, index) in tabs" :key="item.page_id" @click="navChange(index)">
          <span :class="{'active': index == navListActiveIndex }">{{item.name}}</span>
        </div>
        <!-- 末尾占位 -->
        <div class="nav-item nav-item-last"></div>
      </div>
      <!-- 右侧显示隐藏按钮 -->
      <div class="nav-display" @click="navDisplay">
        <i class="header-down" :class="{'rotate': isRotate}"></i>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="mask" v-show="isDisplay"></div>
  </div>
</template>

<script>
  import Navbar from 'base/navbar';
  import scrollToMiddle from 'api/scroll';
  import { SUCC_CODE } from 'api/config.js';

  export default {
    name: 'HomeHeader',
    components: {
      Navbar
    },
    data() {
      return {
        tabs: [],
        navListActiveIndex: '0',
        isDisplay: false,
        isRotate: false
      };
    },
    created() {
      this.getHomeHeader();
    },
    methods: {
      // 获取首页nav数据
      async getHomeHeader() {
        const { data: res } = await this.$http.get('homenav');
        if (res.code === SUCC_CODE) {
          this.tabs = res.data.tabs;
        }
      },
      navChange(index) {
        // 导航栏切换
        this.navListActiveIndex = index;
        // 向父组件传递index
        this.$emit('navChange', index);
        // 滑动导航条
        const element = this.$refs.nav;
        scrollToMiddle(element, element.children[index]);
      },
      navDisplay() {
        this.isDisplay = !this.isDisplay;
        this.isRotate = !this.isRotate;
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.homeheader {
  position: relative;
  background-color: $header-bgc;
  height: 1.41rem;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);

  // 顶部搜索区
  .logo {
    width: 0.6rem;
    text-align: center;
    img {
      width: 80%;
    }
  }
  .header-middle {
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.62rem;
    border: 1px solid $border-color;
    border-radius: 0.04rem;
    color: rgba(0, 0, 0, 0.3);
    background-color: $bgc-theme;
    font-size: 0.3rem;
    .header-search {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 0.1rem;
      background: url("./img/search.png") no-repeat center;
      background-size: cover;
    }
  }
  .header-user {
    width: 0.6rem;
    height: 0.6rem;
    background: url("./img/header-user.png") no-repeat center;
    background-size: 0.4rem 0.4rem;
  }

  // 导航栏
  .nav-wrap {
    position: relative;
    overflow: hidden;
    height: 0.57rem;

    // 右侧显示隐藏按钮
    .nav-display {
      position: absolute;
      right: 0;
      top: 0;
      width: 0.68rem;
      height: 0.55rem;
      background-color: $header-bgc;
      box-shadow: -15px 0 15px 0 $header-bgc;
      z-index: $nav-z-display;
      @include flex-center();
      .header-down {
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        background: url("./img/header-down.png") no-repeat center;
        background-size: cover;
        transition: transform 0.2s linear;
      }
    }
    .rotate {
      transform: rotate(180deg);
    }
  }

  .nav {
    overflow-x: auto;
    white-space: nowrap;
    // 取消滚动条
    &::-webkit-scrollbar {
      display: none;
    }
    &-item {
      display: inline-block;
      font-size: 0.26rem;
      color: rgb(116, 116, 116);
      padding: 0 0.25rem;
      span {
        display: block;
        line-height: 0.55rem;
        border-bottom: 2px solid rgba(237, 91, 0, 0);
      }
      .active {
        color: $nav-active-color;
        border-color: $nav-active-color;
      }
    }
    // 末尾占位
    .nav-item-last {
      width: 0.7rem;
      padding: 0 0;
    }
  }

  // 导航栏隐藏的部分
  .nav-hide {
    position: absolute;
    left: 0;
    top: 0.84rem;
    z-index: $nav-z-hide;
    background-color: $header-bgc;
    font-size: 0.28rem;
    text-align: left;
    padding: 0 0.25rem;
    max-height: 10rem;
    overflow: hidden;
    .title {
      padding-top: 0.25rem;
    }
    .btn-wrap {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.34rem;
      .btn-item {
        margin-right: 0.2rem;
        margin-bottom: 0.24rem;
        width: 1.52rem;
        height: 0.56rem;
        text-align: center;
        line-height: 0.56rem;
        border: 1px solid $border-color;
        border-radius: 4px;
        font-size: 0.25rem;
        background-color: $bgc-theme;
        &:nth-child(4) {
          margin-right: 0;
        }
        span {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .btn-item-active {
        background-color: #fde0d5;
        border-color: $link-active-color;
        color: $link-active-color;
      }
    }
  }

  // 导航栏隐藏的部分的动画效果
  .navhide-enter {
    max-height: 0.66rem;
  }
  .navhide-enter-active {
    transition: max-height 0.5s;
  }
  .navhide-leave-to,
  .navhide-leave {
    max-height: 0;
  }

  // 遮罩层
  .mask {
    position: absolute;
    top: 1.41rem;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
