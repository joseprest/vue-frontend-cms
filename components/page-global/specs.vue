<template>
  <div>
    <div class="columns">
      <div class="column is-8">
        <ws-title
          v-if="cmsData.title"
          :title="cmsData.title"
          :description="cmsData.subtitle"
          align="left"
        />
      </div>
    </div>

    <div class="columns">
      <div class="column img-container">
        <ws-image
          v-if="cmsData.image"
          :src="$getImageUrlFromCms(cmsData.image)"
          :alt="cmsData.image.alternativeText"
        />
      </div>
      <div class="column box-info">
        <div class="columns">
          <div class="column is-7">
            <ul class="box-list-items">
              <ws-list-item
                v-for="item in cmsData.features"
                :key="`feature${item.id}`"
                check-type="check"
              >
                {{ item.title }}
                <div v-if="item.text" class="has-text-weight-normal">
                  {{ item.text }}
                </div>
              </ws-list-item>
            </ul>
          </div>
          <div class="column is-8">
            <ul class="has-text-dark2">
              <li
                v-for="item in cmsData.features_col_2"
                :key="`feature2-${item.id}`"
                class="has-text-weight-bold"
                v-bind:class="{ 'item-list__check': item.is_check }"
              >
                {{ item.title }}
                <div v-if="item.text" class="has-text-weight-normal">
                  {{ item.text }}
                </div>
              </li>
              <li>
                <ws-link
                  v-if="cmsData.full_spec_button"
                  :cms-data="cmsData.full_spec_button"
                  class="mt-25"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="cmsData.cta_button"
      class="columns is-vcentered has-text-centered mb-15"
    >
      <div class="column has-text-centered-mobile">
        <ws-button :cms-data="cmsData.cta_button" />
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

<style lang="scss" scoped>
li.item-list {
  font-weight: 600;
}
.button {
  padding-left: 1.5em;
  padding-right: 1.5em;
  line-height: 1.1em !important;
  span {
    white-space: break-spaces;
    text-align: left;
  }
}
.button.link {
  display: inline-block;
  text-align: left;
}
.column.is-8 li.item-list__check {
  font-weight: 600 !important;
  font-size: 18px;
}

.box-info {
  @include mobile {
    padding-top: 0;
  }
  order: 1;
  a {
    margin-left: 0;
  }
}

.column.price {
  padding-left: 0;
  @include mobile {
    padding-left: 0.75rem;
  }
}

.img-container {
  order: 2;

  @include touch {
    padding-bottom: 0;
    padding-top: 0;
    display: block;
  }

  @include desktop {
    transform: translateY(-130px);
    margin-bottom: -130px;
  }

  img {
    width: 70%;

    @include desktop {
      margin-left: 160px;
      margin-top: -90px;
    }

    @include tablet-only {
      margin-left: 35%;
      margin-top: -40px;
    }

    @include mobile {
      width: 60%;
      margin-left: 18%;
      margin-top: 0;
    }
  }
}
@include mobile {
  .ws-title {
    margin-bottom: 0 !important;
  }
}
</style>
