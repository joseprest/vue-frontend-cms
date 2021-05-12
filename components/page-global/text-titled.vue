<template>
  <div class="story-paragraph" :class="{ 'with-title': cmsData.title }">
    <h3 v-if="cmsData.title" class="title">
      {{ cmsData.title }}
    </h3>
    <div
      v-if="cmsData.text"
      class="rich-text"
      v-html="$richTextImageUrls($md.render(cmsData.text))"
    />
  </div>
</template>

<script>
export default {
  name: 'StoryParagraph',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.story-paragraph {
  margin-bottom: 2rem;
  font-weight: $weight-light;

  &.with-title {
    margin-top: 3rem;
  }

  .title {
    font-weight: $weight-normal;
    margin-bottom: 2rem;
    color: $body-color;
    text-transform: uppercase;
  }
}
</style>
