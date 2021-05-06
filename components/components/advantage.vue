<template>
  <div class="advantage">
    <div class="icon">
      <img :src="icon" :alt="title" />
    </div>
    <div class="title has-text-weight-semibold" v-html="title"></div>
    <div class="description" v-html="description"></div>
    <ws-link v-if="link" :link="link" :url="url" :target="target" class="mt-25">
    </ws-link>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: '_blank',
    },
  },
}
</script>

<style lang="scss" scoped>
.advantage {
  margin-top: 20px;
  .title {
    font-size: 1.35rem;
    margin-top: 20px;
    margin-bottom: 14px;
  }
  .icon {
    width: auto;
    height: 50px;
    img {
      width: auto;
      height: 50px;
    }
  }
}
</style>
