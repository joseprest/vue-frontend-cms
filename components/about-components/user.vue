<template>
  <div class="user is-flex-column align-center-touch has-text-centered-touch">
    <figure class="image is-128x128">
      <ws-image class="is-rounded" :src="getImgSrc" :alt="user.name" />
    </figure>
    <div class="user-content">
      <p class="is-size-6 has-text-weight-bold">{{ user.name }}</p>
      <p class="is-size-6">{{ user.position }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },

  data() {
    return {}
  },

  computed: {
    getImgSrc() {
      return require(`@/assets/imgs/team/${this.user.img}`)
    },

    getMail() {
      return `mailto: ${this.user.email}@wattsense.com`
    },
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.user {
  margin-bottom: 3em;

  &-content {
    padding: 1.5rem 0;
  }

  img {
    border: 1px solid $grey-lighter;
  }
}
</style>
