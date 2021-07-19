<template>
  <ul class="links mt-25">
    <li v-for="rec in links" :key="rec.id">
      <component
        :is="$isExternalUrl(rec.link) ? 'a' : 'nuxt-link'"
        v-bind="setProps(rec.link)"
      >
        {{ rec.text }}
      </component>
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

  methods: {
    setProps(element) {
      if (this.$isExternalUrl(element)) {
        return {
          target: '_blank',
          href: element,
        }
      }
      return {
        to: element ? this.localePath(element) : '',
      }
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
