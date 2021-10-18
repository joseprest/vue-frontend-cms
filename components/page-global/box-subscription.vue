<template>
  <div>
    <ws-title
      v-if="cmsData.title"
      :title="cmsData.title"
      :description="cmsData.subtitle"
    />

    <div class="columns is-vcentered is-centered advantages">
      <div
        v-for="item in cmsData.features"
        :key="`subscr-feature${item.id}`"
        class="column is-4"
      >
        <div class="action-pricing">
          <div class="icon">
            <img
              :src="$getImageUrlFromCms(item.image)"
              :alt="item.image.alternativeText"
              class="icon"
            />
          </div>
          <div class="title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-centered">
      <ws-button :cms-data="cmsData.button" class="mt-25" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxSubscription',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.advantages {
  margin-left: 15%;
  margin-right: 15%;
  @include desktop {
    margin-left: 8%;
    margin-right: 8%;
  }
  @include tablet-only {
    margin-left: 8%;
    margin-right: 8%;
  }
  @include touch {
    margin-left: 0;
    margin-right: 0;
    margin-top: 20px;
  }
  .box {
    font-weight: 600;
    text-align: center;
  }
}

.action-pricing {
  background: $white;
  padding: 5px;
  height: 100%;
  display: flex;
  flex-flow: column;
  border-radius: 10px;
  box-shadow: 0 16px 25px rgba(24, 69, 101, 0.06);
  .icon {
    height: 100px;
    width: 100%;
    @include mobile {
      margin-top: 10px;
    }
  }
  .title {
    font-size: 1em;
    text-align: center;
    padding: 0 20px;
    line-height: 1.5rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @include mobile {
      height: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
.icon {
  max-height: 75px;
}
</style>
