<template>
  <div class="container my-6">
    <ws-title class="has-text-centered mb-10 underline">
      {{ cmsData.title }}
    </ws-title>
    <div class="feature-anchor has-text-centered">
      <ws-link :url="cmsData.anchor_url" class="mt-25">
        {{ cmsData.anchor_text }}
      </ws-link>
    </div>
    <div class="columns is-multiline feature-steps">
        <div
          v-for="feature in cmsData.miniFeatures"
          :key="`customer-feature-index-${feature.id}`"
          class="column is-6 is-12-mobile"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <ws-image
                  :src="$getImageUrlFromCms(feature.image)"
                  :alt="feature.tip"
                />
              </figure>
            </div>
            <div class="card-content has-text-centered">
              <ws-title
                :title="feature.tip"
                align="center"
              />
              <p class="description is-size-6">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
    </div>
    <div class="has-text-centered">
      <ws-link :url="cmsData.contact_us_url" class="mt-25">
        {{ cmsData.contact_us_text }}
      </ws-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageMiniBmsFeatures',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.columns {
  line-height: 2em;
  margin-bottom: 1em;
  @include touch {
    margin-bottom: 0;
  }
}

.feature-steps {
  margin-top: 3rem !important;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0 40px;
  .column {
    padding: 40px 20px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    figure {
      margin-bottom: 1rem;
      justify-content: center;
      display: flex;
    }
  }
}

</style>
