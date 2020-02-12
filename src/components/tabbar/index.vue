<template>
  <div class="tabbar">
    <router-link class="tabbar-item" to="/home">
      <i class="img-icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link class="tabbar-item" to="/category">
      <i class="img-icon-category"></i>
      <span>分类</span>
    </router-link>
    <router-link class="tabbar-item" to="/star">
      <i class="img-icon-star"></i>
      <span>星球</span>
    </router-link>
    <router-link class="tabbar-item" to="/cart">
      <i class="img-icon-cart"></i>
      <span>购物车</span>
    </router-link>
    <router-link class="tabbar-item" to="/user">
      <i class="img-icon-user"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Tabbar'
  };
</script>
<style lang="scss" scoped>
@import "~assets/scss/mixins";

.tabbar {
  display: flex;
  width: 100%;
  height: $tabbar-height;

  &-item {
    flex: 1;
    @include flex-center(column);
    color: #999;
  }

  .img-icon-home {
    @include img-icon("./img/icon-home.png");
  }

  .img-icon-category {
    @include img-icon("./img/icon-category.png");
  }

  .img-icon-star {
    @include img-icon("./img/icon-star.png");
  }

  .img-icon-cart {
    @include img-icon("./img/icon-cart.png");
  }

  .img-icon-user {
    @include img-icon("./img/icon-user.png");
  }
}

.router-link-active {
  color: $link-active-color;
}

.router-link-active .img-icon-home {
  background: url("./img/icon-home-active.png");
  background-size: cover;
}

.router-link-active .img-icon-category {
  background: url("./img/icon-category-active.png");
  background-size: cover;
}

.router-link-active .img-icon-star {
  background: url("./img/icon-star-active.png");
  background-size: cover;
}

.router-link-active .img-icon-cart {
  background: url("./img/icon-cart-active.png");
  background-size: cover;
}

.router-link-active .img-icon-user {
  background: url("./img/icon-user-active.png");
  background-size: cover;
}
</style>
