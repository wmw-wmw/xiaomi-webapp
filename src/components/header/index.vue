<template>
  <!-- header区 -->
  <navbar>
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
</template>

<script>
  import Navbar from 'base/navbar';

  export default {
    name: 'GHeader',
    components: {
      Navbar
    },
    methods: {
      goHome() {
        this.$router.push('/home');
      }
    }
  };
</script>

<style lang="scss" scoped>
// header区
.header {
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
</style>
