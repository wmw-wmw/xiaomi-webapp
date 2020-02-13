<template>
  <div class="navbar">
    <div class="navbar-left">
      <slot name="left"></slot>
    </div>
    <div class="navbar-center">
      <slot name="center"></slot>
    </div>
    <div class="navbar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.navbar {
  position: relative;
  @include flex-between();
  height: 0.84rem;
  &-left {
    margin: 0 0.2rem;
  }
  &-center {
    flex: 1;
  }
  &-right {
    margin: 0 0.2rem;
  }
}
</style>
