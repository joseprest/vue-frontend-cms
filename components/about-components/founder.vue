<template>
  <div v-if="user" class="user">
    <div class="user-content">
      <p class="has-text-weight-semibold founder">{{ user.title }}</p>
      <p class="founder">{{ user.text }}</p>
    </div>
    <figure class="image is-128x128">
      <img
        class="is-rounded"
        :src="$getImageUrlFromCms(user.image)"
        :alt="user.title"
      />
    </figure>
  </div>
</template>

<script>
export default {
  name: 'Founder',
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
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  float: right;
  &-content {
    padding: 0;
    color: $black;
    text-align: right;
    p.founder {
      margin-bottom: 0;
      font-size: 0.9rem;
    }
  }
  .image {
    height: 98px;
    margin: 0 0 0 20px;
  }
  img {
    border: 1px solid $grey-lighter;
    @include tablet {
      width: 80px;
    }
  }
  figure {
    margin-top: 1rem;
    @include tablet {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
