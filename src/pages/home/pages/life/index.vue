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
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4db350ebc63fc2cc5d264576ad777e50.jpg?thumb=1&w=720&h=360'
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
