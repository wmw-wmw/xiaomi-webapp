<template>
  <div class="intelligence">
    <img :src="imgUrl" />
  </div>
</template>

<script>
  export default {
    name: 'Intelligence',
    data() {
      return {
        imgUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b94bfe0845565f6be264bdcf99698125.jpg?thumb=1&w=720&h=360'
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
