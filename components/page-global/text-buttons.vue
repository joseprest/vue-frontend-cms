<template>
  <div>
    <div
      v-if="cmsData.text"
      class="rich-text"
      :class="`rich-text-${cmsData.text_style}`"
      v-html="$richTextImageUrls($md.render(cmsData.text))"
    />
    <p class="buttons is-flex align-center mt-25">
      <!-- TODO: button should force demo model to pop up -->
      <ws-button
        v-for="btn in cmsData.buttons"
        :key="`text-btn-${btn.id}`"
        :url="btn.file ? btn.file.url : btn.url"
        :is-inverted="btn.inverted"
        class="mt-20 mx-5"
      >
        {{ btn.title }}
      </ws-button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextButtons',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
