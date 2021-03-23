<template>
  <section class="section clients">
    <div class="container">
      <ws-paragraph class="has-text-centered">
        <ws-title align="center">
          {{ cmsData.title }}
          <template #description>
            {{ cmsData.subtitle }}
          </template>
        </ws-title>
        <!-- color="inverted" /> -->
      </ws-paragraph>

      <!-- <clients-logos /> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexClients',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 6rem;
  padding-bottom: 0;
}
.client-logo {
  margin-top: 0;
  @include touch {
    margin-top: 2rem;
  }
}
</style>
