<template>
  <div class="columns is-multiline">
    <div class="column is-6 is-12-touch">
      <ws-title
        :title="cmsData.title"
        :description="cmsData.text"
        align="left"
      />
      <div class="is-hidden-desktop">
        <ws-image
          class="illustration"
          :src="$getImageUrlFromCms(cmsData.image)"
          :alt="cmsData.title"
        />
      </div>
      <div class="buttons">
        <ws-button
          v-for="btn in cmsData.buttons"
          :key="`btn${btn.id}`"
          :cms-data="btn"
          class="mr-10"
        />
      </div>
    </div>
    <div class="column is-6 is-hidden-touch">
      <ws-image
        class="illustration"
        :src="$getImageUrlFromCms(cmsData.image)"
        :alt="cmsData.title"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.section.solution {
  margin-bottom: 1.5rem;
  .buttons {
    margin-top: 30px;
    .button {
      line-height: 1.1em !important;
      span {
        white-space: break-spaces;
        text-align: left;
      }
    }
    .legend {
      margin-bottom: 5px;
      font-size: 0.9em;
      text-align: center;
    }
  }
  .buttons.hub {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ws-title {
    @include touch {
      margin-bottom: 0 !important;
    }
  }
}
.illustration {
  margin-left: auto;
  margin-right: auto;
  @include touch {
    max-width: 500px;
    height: auto;
    margin-bottom: 1.5rem;
  }
}
</style>
