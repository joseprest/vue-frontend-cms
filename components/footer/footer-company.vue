<template>
  <div v-if="cmsData" class="mt-25">
    <figure class="image is-128x128">
      <img
        :src="$getImageUrlFromCms(cmsData.image)"
        alt="Wattsense"
        height="50%"
      />
    </figure>
    <!-- Contacts -->
    <nuxt-link
      class="mt-10 small has-text-weight-semibold"
      :to="cmsData.Link.link"
    >
      {{ cmsData.Link.text }}
    </nuxt-link>
    <a
      class="small has-text-weight-semibold"
      style="opacity: 0.8"
      :href="`tel:${cmsData.phone}`"
      target="_blank"
      @click="linkClick"
    >
      {{ cmsData.phone }}
    </a>
    <!-- TODO: language selector -->
  </div>
</template>

<script>
export default {
  name: 'FooterCompany',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  methods: {
    linkClick(htmlElem) {
      this.$gtm.push({
        event: 'uaevent',
        category: 'navigation',
        action: 'footer',
        label: htmlElem.target.textContent,
      })
    },
  },
}
</script>
