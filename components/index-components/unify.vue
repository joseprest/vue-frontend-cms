<template>
  <div>
    <div class="columns is-multiline is-vcentered">
      <div class="column is-6 is-12-touch">
        <ws-title align="left">
          {{ cmsData.title }}
        </ws-title>
        <ws-link :url="cmsData.url" class="mt-20">
          {{ cmsData.button }}
        </ws-link>
      </div>
      <div class="column is-6 is-12-touch animation">
        <ws-image
          :src="$getImageUrlFromCms(cmsData.image)"
          :alt="cmsData.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexCollectUnityData',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.animation {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    z-index: 1;
  }
  @include touch {
    margin-top: 1em;
  }
}
.ws-title {
  margin-bottom: 0;
}

.button.long {
  display: inline-block;
  text-align: left;
  white-space: break-spaces;
  @include mobile {
    display: inherit;
    padding-top: 0 !important;
    margin-bottom: 1em;
  }
  span {
    line-height: 1em;
  }
}
@supports (-webkit-appearance: none) {
  .button.long {
    white-space: pre-line;
    span {
      line-height: 1.5em;
    }
  }
}
</style>
