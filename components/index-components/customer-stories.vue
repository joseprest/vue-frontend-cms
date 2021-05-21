<template>
  <div>
    <ws-title class="has-text-left mb-10">
      {{ cmsData.title }}
    </ws-title>
    <div class="columns is-multiline">
      <div class="is-flex-tablet">
        <div
          v-for="story in cmsData.stories"
          :key="`customer-story-index-${story.id}`"
          class="column is-4 is-12-mobile"
        >
          <div class="card">
            <div class="card-image">
              <nuxt-link :to="story.link">
                <figure class="image">
                  <ws-image
                    :src="$getImageUrlFromCms(story.image)"
                    :alt="story.company"
                  />
                </figure>
              </nuxt-link>
            </div>
            <div class="card-content">
              <p class="subtitle is-size-6">
                {{ story.description }}
              </p>
            </div>
            <div class="card-footer">
              <p class="card-footer-item">
                <ws-link
                  :url="story.link"
                  :is-small="true"
                  :is-transparent="true"
                >
                  {{ cmsData.continue_reading }}
                </ws-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ws-link :url="cmsData.full_list_url" class="mt-25">
      {{ cmsData.check_full_list }}
    </ws-link>
  </div>
</template>

<script>
export default {
  name: 'CustomerStories',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.column.hidden {
  display: none;
}

.card {
  height: 100%;
  transition: all 0.4s ease-in-out;
  border-radius: 5px;
  &:hover {
    // transform: scale(1.01);
    box-shadow: 0 5px 6px rgba(10, 10, 10, 0.1), 0 0 0 2px rgba(10, 10, 10, 0.1);
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // @include mobile {
  // 	display: block;
  // }

  &-image {
    display: flex;
    align-items: flex-start;
    min-height: 171px;
    margin-bottom: 1.5rem;

    figure img {
      max-height: 181px;
      width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    @include touch {
      min-height: unset;
      justify-content: center;

      figure img {
        padding: 0;
        max-height: unset;
      }
    }
  }

  &-content {
    display: flex;
    flex-grow: 1;
    margin-top: -1rem;
    .title {
      color: $body-color;
    }
    .subtitle {
      color: $body-color;
      line-height: 1.4;
    }

    @include desktop-only {
      margin-top: -2rem;
      padding-top: 0;
    }
  }

  &-footer {
    border-top: 0;
    justify-content: flex-end;
    &-item {
      justify-content: flex-end;
      .continue-reading {
        font-size: $size-7;
        color: $success;

        @include touch {
          font-size: $size-6;
        }
      }
    }
  }
}
</style>
