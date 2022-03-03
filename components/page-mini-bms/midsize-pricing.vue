<template>
  <div class="midsize-pricing">
    <div class="container py-6">
      <ws-title
        :description="cmsData.text"
        align="left"
        class="midsize-pricing__title pt-4"
      />
      <div class="columns is-multiline steps">
        <div class="is-flex-tablet">
          <div
            v-for="step in cmsData.steps"
            :key="`site-step-index-${step.id}`"
            class="column is-4 is-12-mobile"
          >
            <div class="align-top is-flex-column box box-green">
              <figure class="image">
                <ws-image
                  :src="$getImageUrlFromCms(step.image)"
                  :alt="step.tip"
                  width="61"
                  height="61"
                />
              </figure>
              <div class="has-text-centered">
                <p class="step-title has-text-weight-bold mb-3">
                  {{ step.tip }}
                </p>
                <div class="sub-title" v-html="$md.render(step.description)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-centered">
        <ws-button :cms-data="cmsData.pricing_explore_btn" class="mt-25" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageMiniBmsMidsizePricing',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  background: linear-gradient(to bottom, white, #f1f5f7);
}
.midsize-pricing {
  background: linear-gradient(to bottom, white, #f1f5f7);
  @include touch {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
}

.columns {
  line-height: 2em;
  margin-bottom: 1em;
  @include touch {
    margin-bottom: 0;
  }
}

.midsize-pricing__title {
  &:before {
    content: '';
    background: url('~/assets/imgs/title-divider.svg') no-repeat center;
    position: absolute;
    top: -10px;
    left: 0;
    right: auto;
    height: 10px;
    width: 100px;
  }
}
.steps {
  box-shadow: none;
  background: inherit;
  padding: 0;
  .column {
    .box {
      background: #ffffff;
      box-shadow: 10px 10px 40px rgba(39, 54, 77, 0.1);
      border-radius: 15px;
      figure {
        margin-bottom: 1rem;
        justify-content: center;
        display: flex;
        img {
          height: 70px;
          width: auto;
        }
      }
      .step-title,
      .sub-title {
        font-size: 18px;
        &::v-deep a {
          color: #2bc47b;
          text-decoration-line: underline;
        }
      }
    }
  }
}

.explore-link {
  box-shadow: 5px 5px 20px rgb(39 54 77 / 10%);
  border-radius: 5px;
  padding: 12px 30px;
  background: #fff;
}
</style>
