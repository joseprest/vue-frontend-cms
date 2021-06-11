<template>
  <div>
    <ws-title :title="cmsData.title" align="left" />
    <div class="animation">
      <ws-image
        :src="$getImageUrlFromCms(cmsData.image)"
        :placeholder="$getImageUrlFromCms(cmsData.image, 'thumbnail')"
        class="building"
        :alt="cmsData.title"
      />
    </div>
    <!-- CTA -->
    <button-discover-our-products
      :cms-data="cmsData.ButtonDiscoverOurProducts"
    />
  </div>
</template>

<script>
export default {
  name: 'IndexUpgradeBms',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.ws-title {
  margin-right: 14em;
  @include mobile {
    margin-right: 0;
  }
}
.animation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img.building {
    width: 100%;
    max-width: 650px;
    height: auto;
    @include mobile {
      max-width: 100%;
    }
  }
  img.bullet {
    position: absolute;
    animation: hideshow 1.5s ease infinite;
  }
}
</style>
