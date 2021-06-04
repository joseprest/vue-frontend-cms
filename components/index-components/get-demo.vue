<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column is-12">
        <p class="buttons">
          <ws-button :cms-data="cmsData.button" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexGetDemo',

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
