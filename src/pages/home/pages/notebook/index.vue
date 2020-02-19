<template>
  <div class="notebook">
    <img :src="imgUrl" />
  </div>
</template>

<script>
  export default {
    name: 'Notebook',
    data() {
      return {
        imgUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7f9958a27264c7138f01a86c2aa154.jpg?thumb=1&w=360&h=158'
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
