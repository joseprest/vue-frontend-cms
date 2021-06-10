<template>
  <section class="section">
    <div class="container">
      <ws-title :title="cmsData.title" align="left" />
      <div class="content">
        <p v-html="$md.render(cmsData.content)"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Paragraph',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>
