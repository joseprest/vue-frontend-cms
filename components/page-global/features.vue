<template>
  <div>
    <ws-title v-if="cmsData.title" :title="cmsData.title" />
    <div v-if="cmsData.image" class="product">
      <ws-image
        :src="$getImageUrlFromCms(cmsData.image)"
        :alt="cmsData.image.alternativeText"
      />
    </div>
    <list-items :items="cmsData.features" />

    <div v-if="cmsData.buttons" class="cta">
      <ws-button
        v-for="btn in cmsData.buttons"
        :key="`cta${btn.id}`"
        :cms-data="btn"
        class="mt-35 mx-5"
      />
    </div>
  </div>
</template>

<script>
import ListItems from './list-items.vue'

export default {
  components: {
    ListItems,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  @include touch {
    display: flex;
  }
}
.product {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  img {
    max-width: 350px;
    height: auto;
  }
  @include touch {
    margin-top: 20px;
    img {
      max-width: 300px;
    }
  }
}
.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
