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
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/369da5b95afd2dec52fdb2329810b2fc.jpg?thumb=1&w=696&h=436'
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
