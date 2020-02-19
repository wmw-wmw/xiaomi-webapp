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
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f0503a9776391de7d6f7f925323163d.jpg?thumb=1&w=720&h=294'
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
