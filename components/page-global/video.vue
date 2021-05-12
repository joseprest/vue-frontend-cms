<template>
  <ws-paragraph>
    <div class="story-video">
      <div class="video">
        <iframe
          :width="cmsData.video_width"
          :height="cmsData.video_heigh"
          :style="`width: ${cmsData.video_width}px; height:${cmsData.video_height}px;`"
          frameborder="0"
          :src="`https://www.youtube.com/embed/${cmsData.video_id}?autoplay=0&modestbranding=1&rel=0&showinfo=0`"
          allow="accelerometer; autoplay; modestbranding; rel; showinfo; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <span v-if="cmsData.title" class="title">{{ cmsData.title }}</span>
    </div>
  </ws-paragraph>
</template>

<script>
export default {
  name: 'Video',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.story-video {
  margin-top: 2em;
  margin-bottom: 2rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: 400;
    background: rgba($blue-dark, 0.05);
    margin-bottom: 0;
    padding: 5px;
  }

  .video {
    width: 100%;
    height: auto;
    iframe {
      width: 100%;
      height: auto;
      @include mobile {
        height: 208px !important;
      }
    }
  }
}
</style>
