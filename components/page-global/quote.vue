<template>
  <ws-paragraph>
    <div class="story-quote is-inline-flex">
      <div class="quote">
        <div class="text" v-html="$md.render(cmsData.text)" />
        <div class="author">
          <strong>{{ cmsData.author }}</strong>
          <br />
          {{ cmsData.author_position }}
        </div>
      </div>
    </div>
  </ws-paragraph>
</template>

<script>
export default {
  name: 'Quote',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.story-quote {
  border-left: 8px $green solid;
  margin-bottom: 2rem;

  .quote {
    margin-left: 30px;
    font-style: italic;

    .text {
      font-size: $size-5;
      font-weight: 300;
      margin-bottom: 15px;
    }

    .author {
      font-size: $size-7;
      line-height: 1.5;
      text-align: right;
    }
  }
}
</style>
