<template>
  <div class="container">
    <ws-title :title="cmsData.title" align="center" />
    <div class="columns is-multiline mb-25 integration">
      <div
        v-for="btn in cmsData.sources"
        :key="`res-${btn.id}`"
        class="column is-4-widescreen is-6-desktop is-6-tablet is-12-mobile"
      >
        <button-extended :cms-data="btn" color="green" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePartnerResources',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.section.main {
  background-image: linear-gradient(to bottom, white, #f0f5f7);
}

.title {
  width: 100%;
  max-width: 100%;
  font-size: $size-4;
  line-height: 1.75em;
  margin-bottom: 15px;
  font-weight: $weight-medium;
  color: rgba($gray-dark, 0.8);

  @include mobile {
    font-size: $size-4;
  }
}
</style>
