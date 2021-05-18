<template>
  <div class="text-titled-image">
    <ws-title v-if="cmsData.title" :title="cmsData.title" />
    <div
      v-if="cmsData.text"
      class="rich-text"
      v-html="$richTextImageUrls($md.render(cmsData.text))"
    />
    <div class="image-container">
      <figure class="image has-text-centered">
        <ws-image
          :src="$getImageUrlFromCms(cmsData.image)"
          :alt="cmsData.image.alternativeText"
        />
        <small>{{ cmsData.image.caption }}</small>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextTitledImage',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
$max-height-image: 650px;

.image-conteiner {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  max-height: $max-height-image;

  .image {
    img {
      width: unset !important;
      max-height: $max-height-image;
      max-width: 100%;
    }
  }
}
</style>
