<template>
  <div>
    <div
      v-if="cmsData.text"
      class="rich-text"
      :class="`rich-text-${cmsData.text_style}`"
      v-html="$richTextImageUrls($md.render(cmsData.text))"
    />
    <div class="buttons is-flex align-center mt-25">
      <ws-button
        v-for="btn in cmsData.buttons"
        :key="`text-btn-${btn.id}`"
        :cms-data="btn"
        class="mt-20 mx-5"
      />
    </div>
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
