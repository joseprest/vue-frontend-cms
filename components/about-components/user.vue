<template>
  <div class="user is-flex-column align-center-touch has-text-centered-touch">
    <figure class="image is-128x128">
      <ws-image
        class="is-rounded is-bordered"
        :src="$getImageUrlFromCms(user.photo)"
        :alt="user.name"
      />
    </figure>
    <div class="user-content">
      <p class="is-size-6 has-text-weight-bold">{{ user.name }}</p>
      <p class="is-size-6">{{ user.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.user {
  margin-bottom: 3em;

  &-content {
    padding: 1.5rem 0;
  }
}
</style>
