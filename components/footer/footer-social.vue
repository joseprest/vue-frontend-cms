<template>
  <ul class="list-follow-us" style="line-height: 2rem; margin-top: 1rem">
    <li v-for="network in socialLinks" :key="`social${network.id}`">
      <a
        :href="network.link"
        target="_blank"
        :title="network.title"
        rel="noopener"
      >
        <figure class="image is-48x48">
          <img :src="$getImageUrlFromCms(network.icon)" :alt="network.title" />
        </figure>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FooterSocial',
  props: {
    cmsData: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    socialLinks() {
      return this.cmsData?.socialnetwork
    },
  },
}
</script>

<style lang="scss" scoped>
ul.list-follow-us {
  margin-top: 0.5em;
  figure {
    margin-right: 5px;
  }
}
</style>
