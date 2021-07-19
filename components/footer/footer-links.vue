<template>
  <ul class="links mt-25">
    <li v-for="rec in links" :key="rec.id">
      <nuxt-link v-if="!$isExternalUrl(rec.link)" :to="rec.link">
        {{ rec.text }}
      </nuxt-link>
      <a
        v-else
        :href="rec.link"
        :target="rec.open_new_tab ? '_blank' : '_self'"
      >
        {{ rec.text }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FooterList',
  props: {
    cmsData: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    links() {
      return this.cmsData?.links
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
