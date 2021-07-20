<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column is-12">
        <div class="buttons">
          <ws-button :cms-data="cmsData.button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonSection',

  props: {
    cmsData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    @include mobile {
      width: 100%;
    }
  }
}
</style>
