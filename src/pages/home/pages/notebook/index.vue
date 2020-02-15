<template>
  <div class="electrical">
    <img :src="imgUrl" />
  </div>
</template>

<script>
  export default {
    name: 'Electrical',
    data() {
      return {
        imgUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/505792369251355de3fe3f4f89e38ae6.jpg?thumb=1&w=338&h=338'
      };
    }
  };
</script>

<style lang="scss" scoped>
img {
  height: 4.7rem;
  width: 7.2rem;
}
</style>
