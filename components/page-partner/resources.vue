<template>
  <section class="section">
    <div class="container">
      <ws-title :title="cmsData.title" class="has-text-white" align="center" />
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
  </section>
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
.section {
  background: linear-gradient(
    180deg,
    #34455e 8.14%,
    rgba(52, 69, 94, 0.88) 85.01%
  );
  .container {
    @include touch {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
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
