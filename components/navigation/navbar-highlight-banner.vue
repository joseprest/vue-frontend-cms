<template>
  <div class="highlight-banner">
    <div class="highlight-banner-text">
      {{ cmsData.text }}
    </div>
    <ws-button :cms-data="cmsData.button_cta" />
  </div>
</template>

<script>
export default {
  name: 'NavigationNavbarHighlightBanner',

  props: {
    cmsData: {
      type: Object,
      default: () => ({}), // { id: Number, text: String, button_cta: Object }
    },
  },
}
</script>

<style lang="scss" scoped>
.highlight-banner {
  padding: 15px 3rem;
  width: calc(100% + 3rem);
  background-color: #27364d;
  margin-left: -1.5rem;
  color: white;
  font-size: $size-6;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &-text {
    margin-bottom: 0px;
    padding-right: 20px;

    @include touch {
      padding-right: 20px;
      margin-bottom: 20px;
    }
  }

  @include touch {
    display: flex;
    flex-direction: column;
  }
}
</style>
