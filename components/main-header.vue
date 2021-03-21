<template>
  <header class="section">
    <!-- <navbar :home="home"></navbar> -->

    <slot></slot>
  </header>
</template>

<script>
// import Navbar from './Navbar.vue';

export default {
  props: {
    home: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    // Navbar,
  },
}
</script>

<style lang="scss" scoped>
header {
  padding-top: 0;
}
</style>
