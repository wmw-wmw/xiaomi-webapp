<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in iconList" :key="index">
        <a :href="item.path" class="nav-link">
          <img :src="item.imgUrl" class="nav-pic" />
          <!-- <span>{{}}</span> -->
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'RecommendNav',
    props: {
      iconList: Array
    }
  };
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 3.04rem;
  &-list {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: 20%;
  }

  &-link {
    display: block;
  }

  &-pic {
    width: 100%;
  }
}
</style>
