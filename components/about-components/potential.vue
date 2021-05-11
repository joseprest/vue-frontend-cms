<template>
  <div class="potential">
    <div class="content">
      <div class="title">
        <h2 class="has-text-centered has-text-weight-semibold is-size-3">
          {{ cmsData.title }}
        </h2>
      </div>
      <div class="columns">
        <div class="column">
          <ws-image
            :src="$getImageUrlFromCms(cmsData.image)"
            :alt="cmsData.title"
          />
        </div>
        <div class="column" v-html="$md.render(cmsData.text)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Potential',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.potential {
  // transform: skewY(-4deg);
  padding-bottom: 20px;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
    justify-content: center;
    @include mobile {
      flex-direction: column;
    }
    .icon {
      height: 80px;
      width: 80px;
      background-color: $white;
      border: 1px solid $blue-light;
      border-radius: 50%;
      margin-right: 20px;
      @include mobile {
        margin-right: 0;
        margin-bottom: 20px;
      }
      img {
        align-items: center;
        justify-content: center;
      }
    }
    h2 {
      color: $green;
      margin-top: 20px;
      margin-bottom: 20px;
      @include tablet {
        width: 80%;
      }
      @include desktop {
        width: 80%;
      }
    }
  }
}
</style>
