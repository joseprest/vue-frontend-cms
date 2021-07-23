<template>
  <div>
    <span v-if="cmsData && cmsData.caption" class="intro">
      {{ cmsData.caption }}
    </span>
    <h1 v-html="cmsData.title" />
    <div
      class="lorawan-bacnet-gateway-header-content"
      v-html="$md.render(cmsData.content)"
    />
    <div class="image">
      <ws-image
        :src="$getImageUrlFromCms(cmsData.image)"
        :alt="cmsData.image.alternativeText"
        width="524"
        height="323"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LorawanBacnetGatewayHeader',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.lorawan-bacnet-gateway-header-content {
  * {
    margin-bottom: 1em;
  }
  iframe {
    // width: 100%;
    // height: auto;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }
}
</style>
<style lang="scss" scoped>
span.intro {
  display: block;
  font-size: 1.1em;
  font-weight: 500;
  opacity: 0.4;
  margin-bottom: 10px;
}
h1 {
  font-size: 2.3rem;
  font-weight: 600;
  line-height: 1.3em;
  margin: 0 0 25px;
}
h2 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 25px;
  color: rgba($blue-dark, 0.8);
}
img {
  margin-top: 2em;
  margin-bottom: 2em;
  @include desktop {
    width: 100%;
    height: auto;
  }
}
</style>
