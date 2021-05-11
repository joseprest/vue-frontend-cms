<template>
  <div class="mission">
    <div class="content">
      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <h3 class="has-text-centered has-text-weight-semibold is-size-3">
            {{ cmsData.title }}
          </h3>
          <div v-html="$md.render(cmsData.text)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mission',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.mission {
  margin-top: 20px;
  margin-bottom: 20px;
  h3 {
    color: $blue;
    line-height: 1.2em;
    margin-bottom: 1.5rem;
    @include mobile {
      line-height: 2.5rem;
      text-align: left !important;
    }
  }
  p {
    text-align: left !important;
  }
}
</style>
