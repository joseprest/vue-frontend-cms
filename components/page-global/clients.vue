<template>
  <div class="clients">
    <div class="content">
      <div class="title">
        <h2 class="has-text-centered has-text-weight-semibold is-size-3">
          {{ cmsData.title }}
        </h2>
      </div>
      <div class="has-text-centered">{{ cmsData.caption }}</div>
      <div class="list-logos">
        <clients-logos :clients="cmsData.logos" />
      </div>
    </div>
  </div>
</template>

<script>
import ClientsLogos from '~/components/clients-logos.vue'
export default {
  components: {
    ClientsLogos,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.clients {
  margin-top: 20px;
  margin-bottom: 20px;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
    justify-content: center;
    @include mobile {
      flex-direction: column;
      justify-content: left;
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
        width: 60%;
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
  .list-logos {
    margin-top: 50px;
  }
}
</style>
