<template>
  <div class="approach">
    <div class="content">
      <div class="title">
        <h2 class="has-text-centered has-text-weight-semibold is-size-3">
          {{ cmsData.title }}
        </h2>
      </div>
      <div v-html="$md.render(cmsData.caption)" />
      <div class="avantages">
        <div
          v-for="item in cmsData.text_titled_image"
          :key="`approach-${item.id}`"
          class="avantage code media"
        >
          <div class="media-left">
            <p class="image">
              <img :src="$getImageUrlFromCms(item.image)" :alt="item.title" />
            </p>
          </div>
          <div class="media-content">
            <div class="content">
              <h4 class="has-text-weight-semibold is-size-4">
                {{ item.title }}
              </h4>
              <div
                class="has-text-weight-light has-text-justified"
                v-html="$md.render(item.text)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Approach',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.approach {
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
        margin-top: -10px;
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
  .avantages {
    margin-top: 40px;
    .avantage {
      border: 0;
      // display: -webkit-inline-box;
      display: flex;
      margin-bottom: 1.2em;
      .media-left {
        width: 60px;
        @include mobile {
          width: 40px;
        }
      }
      p.image {
        width: 60px;
        @include mobile {
          width: 40px;
        }
      }
      img {
        width: 60px;
        height: auto;
        margin-left: 0;
        @include mobile {
          width: 40px;
        }
      }
      .media-content {
        margin-left: 60px;
        @include mobile {
          margin-left: 15px;
          p {
            text-align: left !important;
          }
        }
      }
    }
    .avantage.connector {
      img {
      }
    }
  }
}
</style>
