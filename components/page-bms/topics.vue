<template>
  <section v-if="cmsData" class="section mb-0">
    <div class="container">
      <h3 class="title has-text-weight-light">{{ cmsData.title }}</h3>
      <hr />

      <template v-for="topic in cmsData.topic">
        <page-bms-topic
          v-if="topic"
          :key="`topic_${topic.id}`"
          :title="topic.title"
          :content="topic.content"
          :see-more="cmsData.see_more"
          :see-less="cmsData.see_less"
        />
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageBmsTopics',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
