<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column is-half is-full-mobile">
        <div class="animation">
          <hooper ref="carousel" :settings="hooperSettings">
            <slide v-for="logo of logos" :key="logo.id">
              <div class="content-slide">
                <div class="card home">
                  <a href="#">
                    <span :id="`integrator-logo${logo.id}`" class="card-image">
                      <ws-image
                        class="card-image"
                        :src="$getImageUrlFromCms(logo.image)"
                        :placeholder="
                          $getImageUrlFromCms(logo.image, 'thumbnail')
                        "
                      />
                    </span>
                  </a>
                </div>
              </div>
            </slide>
          </hooper>
        </div>
      </div>
      <div class="column is-half is-full-mobile">
        <ws-paragraph class="has-text-left">
          <ws-title
            :title="cmsData.title"
            :description="cmsData.subtitle"
            align="left"
          />
          <ws-link
            :title="cmsData.see_integrations.title"
            :url="cmsData.see_integrations.url"
            class="mt-25"
          />
        </ws-paragraph>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'

export default {
  name: 'IndexIntegrations',
  components: {
    Hooper,
    Slide,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        itemsToSlide: 1,
        infiniteScroll: true,
        playSpeed: 4000,
        centerMode: true,
        keysControl: true,
        autoPlay: true,
        mouseDrag: true,
        wheelControl: false,
        breakpoints: {
          0: {
            itemsToShow: 1,
          },
          768: {
            itemsToShow: 1,
          },
          1024: {
            itemsToShow: 1,
          },
        },
      },
    }
  },

  computed: {
    logos() {
      return [...this.cmsData.integrators]
        .sort(() => Math.random() - 0.5)
        .splice(0, 5)
    },
  },
}
</script>

<style lang="scss" scoped>
.ws-title {
  margin-bottom: 0;
}
.animation {
  display: block;
  width: 100%;
  height: 270px;
  background: $white;
  @include mobile {
    height: 170px;
  }
  .content ul {
    margin: 0 !important;
  }
  .hooper {
    padding-top: 0;
    padding-bottom: 0;
    width: 100%;
    height: 100%;
    .hooper-list {
      ul.hooper-track {
        margin: 0 !important;
      }
    }
    .hooper-slide {
      position: relative;
      .content-slide {
        width: 100%;
        height: 100%;
        z-index: 2;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
.columns {
  @include mobile {
    flex-direction: column-reverse;
    display: flex;
  }
}
.card {
  box-shadow: none;
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.4s ease-in-out;
  &-new {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    font-weight: 500;
    height: 1.8em;
    padding-top: 3px;
    padding-left: 0.6em;
    padding-right: 0.6em;
  }
  &-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    img {
      width: auto;
      height: auto;
    }
  }

  &.home {
    .card-image {
      img {
        max-width: 45%;
        max-height: 120px;
        @include mobile {
          max-width: 60%;
          max-height: 400px;
        }
      }
    }
  }

  &.resources {
    border: 1px solid #ecf2fc;
    box-shadow: 0px 3px 15px rgba(113, 150, 193, 0.07);
    border-radius: 5px;
    .card-image {
      width: 100%;
      height: 155px;
      margin-bottom: 0;
      img {
        max-width: 70%;
        max-height: 85px;
        height: auto;
        width: auto;
      }
    }
  }

  &.benefits {
    border: 1px solid #ecf2fc;
    box-shadow: 0px 3px 15px rgba(113, 150, 193, 0.07);
    border-radius: 5px;
    .card-image {
      width: 100%;
      height: 181px;
      margin-bottom: 0;
      img {
        max-width: 70%;
        max-height: 85px;
        height: auto;
        width: auto;
      }
    }
  }
}
</style>
