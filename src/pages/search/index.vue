<template>
  <div class="search">
    <!-- header部区 -->
    <navbar class="header">
      <template v-slot:left>
        <div @click="goBack">
          <a href="#" class="header-left">
            <i></i>
          </a>
        </div>
      </template>
      <template v-slot:center>
        <div class="header-middle">
          <input v-model="keyword" class="header-middle-search" type="text" placeholder="搜索商品名称" />
        </div>
      </template>
      <template v-slot:right>
        <router-link tag="div" to="/search">
          <a href="#" class="header-right">
            <i></i>
          </a>
        </router-link>
      </template>
    </navbar>
    <!-- 包裹区 -->
    <div class="search-wrap">
      <!-- 热门搜索区 -->
      <div>
        <div class="search-wrap-title">热门搜索</div>
        <img class="search-wrap-img" :src="search.ad_list" />
      </div>
      <!-- 热词区 -->
      <div class="search-wrap-key">
        <a
          href="#"
          v-for="(item, index) in search.keywords"
          :key="index"
          :style="{color: item.font_n, background: item.back_n, borderColor: item.border_n}"
        >{{item.word}}</a>
      </div>
      <!-- 常用分类区 -->
      <div>
        <div class="search-wrap-title">常用分类</div>
        <div class="search-wrap-list">
          <a href="#" v-for="(item, index) in search.hot" :key="index">{{item.name}}</a>
        </div>
      </div>
    </div>
    <!-- 搜索商品名称区-->
    <div class="search-key-list" v-show="list.length" @click="deleteKeyList">
      <ul>
        <li class="item" v-for="(item, index) in list" :key="index">
          <a href="#">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Navbar from 'base/navbar';
  import { SUCC_CODE } from 'api/config.js';

  export default {
    name: 'Search',
    components: {
      Navbar
    },
    data() {
      return {
        search: [],
        keyword: '',
        list: [],
        timer: null
      };
    },
    created() {
      this.Search();
    },
    methods: {
      // 获取search数据
      async Search() {
        const { data: res } = await this.$http.get('search');
        if (res.code === SUCC_CODE) {
          this.search = res.data;
        }
      },
      goBack() {
        this.$router.back();
      },
      deleteKeyList() {
        this.list = '';
        this.keyword = '';
      }
    },
    watch: {
      keyword() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (!this.keyword) {
          this.list = [];
          return;
        }
        this.timer = setTimeout(() => {
          const result = [];
          // forEach()只能循环数组和类数组，不能循环对象。
          this.search.hot.forEach(value => {
            if (value.name.indexOf(this.keyword) > -1) {
              result.push(value);
            }
          });
          this.list = result;
        }, 100);
      }
    }
  };
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  width: 7.2rem;
  height: 100%;
  margin: 0 auto;
  background: #fff;

  // header区
  .header {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    height: 0.8rem;
    font-size: 0.3rem;
    background: #f2f2f2;
    color: #666;
    &-left {
      display: block;
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
      background: #fff;
      width: 100%;
      &-search {
        border: 1px solid #e5e5e5;
        border-radius: 0.04rem;
        width: 100%;
        padding: 0 0.2rem;
        outline: 0;
        font-size: 0.3rem;
        font-weight: 400;
        height: 0.5rem;
        line-height: normal;
      }
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
  // 包裹区
  &-wrap {
    padding-top: 0.8rem;
    width: 100%;
    color: #3c3c3c;
    // 热门搜索区
    &-title {
      line-height: 0.8rem;
      padding: 0 0.3rem;
      font-size: 0.24rem;
      text-align: left;
    }
    &-img {
      width: 100%;
      display: block;
    }
    // 热词区
    &-key {
      display: flex;
      flex-wrap: wrap;
      margin: 0.1rem 0.2rem;
      text-align: left;
      a {
        background: #e4e4e4;
        padding: 0.14rem 0.2rem;
        margin: 0.1rem;
        border: 1px solid #e4e4e4;
        background: hsla(12, 99%, 71%, 0.05);
        font-size: 0.24rem;
        color: #484848;
      }
    }
    // 常用分类区
    &-list {
      display: flex;
      flex-wrap: wrap;
      text-align: left;
      height: 1.2rem;
      overflow: hidden;
      padding-left: 0.32rem;
      a {
        background: #f5f5f5;
        height: 0.55rem;
        line-height: 0.55rem;
        padding: 0 0.15rem;
        margin-right: 0.15rem;
        margin-bottom: 0.1rem;
        color: rgba(0, 0, 0, 0.54);
      }
    }
  }
  // 搜索商品名称区
  .search-key-list {
    position: absolute;
    top: 0.8rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    text-align: left;
    background: rgba(0, 0, 0, 0.5);
    .item {
      height: 0.95rem;
      background: #fff;
      list-style: none;
      &:last-child {
        border-bottom: none;
      }
      a {
        display: block;
        overflow: hidden;
        height: 0.95rem;
        font-size: 0.28rem;
        line-height: 0.95rem;
        white-space: nowrap;
        color: #333;
        margin: 0 0.32rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
  }
}
</style>
