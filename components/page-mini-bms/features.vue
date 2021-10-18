<template>
  <div class="container my-6">
    <ws-title class="has-text-centered mb-10 underline">
      {{ cmsData.title }}
    </ws-title>
    <div class="feature-anchor has-text-centered">
      <ws-link
        :url="cmsData.anchor_url"
        isTransparent
        isDecoration
        :isIcon="false"
        class="mt-25"
      >
        {{ cmsData.anchor_text }}
      </ws-link>
    </div>
    <div class="columns is-multiline feature-steps">
      <div
        v-for="feature in cmsData.miniFeatures"
        :key="`customer-feature-index-${feature.id}`"
        class="column is-6 is-12-mobile"
      >
        <div class="align-top is-flex-column box box-green">
          <figure class="image">
            <ws-image
              :src="$getImageUrlFromCms(feature.image)"
              :alt="feature.tip"
            />
          </figure>
          <div class="has-text-centered description">
            <ws-title :title="feature.tip" class="underline" align="center" />
            <div
              class="detail-text is-size-6"
              v-html="$md.render(feature.description)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-centered">
      <ws-link
        :url="cmsData.contact_us_url"
        isTransparent
        class="mt-25 contactus-link"
      >
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
    .is-flex-column {
      height: 100%;
    }
    .box {
      background: #ffffff;
      box-shadow: 10px 10px 40px rgba(39, 54, 77, 0.1);
      border-radius: 15px;
      figure {
        margin-bottom: 1rem;
        justify-content: center;
        display: flex;
        img {
          height: 250px;
          width: auto;
        }
      }
      .description {
        .detail-text::v-deep a {
          color: #2bc47b;
          text-decoration-line: underline;
        }
      }
    }
  }
}
.contactus-link {
  box-shadow: 5px 5px 20px rgb(39 54 77 / 10%);
  border-radius: 5px;
  padding: 12px 30px;
  background: #fff;
}
</style>
