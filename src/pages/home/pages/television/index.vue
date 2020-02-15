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
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d5a1c2397f50c197b9dc72d51092048e.jpg?thumb=1&w=720&h=470'
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
