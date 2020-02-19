<template>
  <div class="life">
    <img :src="imgUrl" />
  </div>
</template>

<script>
  export default {
    name: 'Life',
    data() {
      return {
        imgUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/73b9dffdfb7c32624f4093a8dc2d76f2.jpg?thumb=1&w=720&h=406'
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
