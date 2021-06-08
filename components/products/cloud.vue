<template>
  <div class="columns is-multiline">
    <div class="column is-6 is-12-touch advantages">
      <ws-title
        :title="cmsData.title"
        :description="cmsData.caption"
        align="left"
      />
      <ul class="is-larger">
        <ws-list-item
          v-for="option in cmsData.options"
          :key="`option${option.id}`"
          :check-style="`background: url(${$getImageUrlFromCms(
            option.image
          )}) no-repeat 0`"
        >
          {{ option.title }}
          <div>{{ option.text }}</div>
        </ws-list-item>
      </ul>
    </div>
    <div class="column is-6 is-12-touch">
      <div class="illustration">
        <ws-image
          :src="$getImageUrlFromCms(cmsData.image)"
          :alt="cmsData.image.alternativeText"
        />
      </div>
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

<style lang="scss">
ul {
  list-style: none;
}

.illustration {
  border: 1px solid #f0f5f8;
  @include touch {
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    height: auto;
    margin-bottom: 1.5rem;
  }
}
.advantages {
  margin-top: 0;
  .is-larger {
    margin-top: 20px;
    padding-left: 0;
    li {
      font-weight: 600;
      div {
        font-weight: normal;
      }
    }
  }
}
.ws-title {
  margin-bottom: 0;
}
</style>
