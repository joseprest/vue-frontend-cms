<template>
  <div class="container py-6">
    <div class="nav-wrapper">
      <ws-button
        v-for="button in cmsData.buttons"
        :key="button.id"
        class="mt-20"
        :cms-data="button"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePartnerNavlink',
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
.nav-wrapper {
  display: flex;
  justify-content: center;
  > div {
    padding: 0 10px;
  }
}
</style>
