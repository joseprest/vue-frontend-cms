<template>
  <ul class="links">
    <li v-for="rec in cmsData" :key="rec.id">
      <nuxt-link :to="rec.link">
        {{ rec.text }}
        <!-- TODO: target -->
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FooterList',
  props: {
    cmsData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
ul.links {
  margin-top: 2em;
  li {
    font-size: 0.9em;
    line-height: 1.2em;
    margin-bottom: 1.5em;
  }
}
</style>
