<template>
  <div class="ws-paragraph">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WsParagraph',
}
</script>

<style lang="scss" scoped>
.ws-paragraph {
  margin: auto;
  width: 100%;
  max-width: 100%;
  font-size: $size-6;
  line-height: 1.75em;
  font-weight: $weight-normal;

  @include desktop {
    max-width: 730px;
  }

  a {
    font-size: $size-5;
  }
}
</style>
