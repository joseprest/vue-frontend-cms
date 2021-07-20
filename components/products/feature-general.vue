<template>
  <div>
    <div v-if="cmsData.image_position === 'left'" class="columns is-multiline">
      <div class="column is-6 is-12-touch" style="position: relative">
        <template v-if="cmsData.images.length > 1">
          <div class="content-slider">
            <div class="slider">
              <button class="prev" @click.prevent="slidePrev">
                <img src="~/assets/imgs/arrow.svg" alt="prev" />
              </button>
              <button class="next" @click.prevent="slideNext">
                <img src="~/assets/imgs/arrow.svg" alt="next" />
              </button>
              <hooper ref="carousel" :settings="hooperSettings">
                <slide v-for="img in cmsData.images" :key="`slide${img.id}`">
                  <div class="content-slide">
                    <img
                      :src="$getImageUrlFromCms(img)"
                      :alt="img.alternativeText"
                    />
                  </div>
                </slide>
              </hooper>
            </div>
          </div>
          <div class="image">
            <ws-image
              :src="require('@/assets/imgs/products/features/desktop.png')"
              :alt="cmsData.title"
            />
          </div>
        </template>
        <div v-else class="image">
          <ws-image
            :src="$getImageUrlFromCms(cmsData.images[0])"
            :alt="cmsData.images[0].alternativeText"
          />
        </div>
      </div>
      <div class="column is-6 is-12-touch">
        <ws-title
          :title="cmsData.title"
          :description="cmsData.text"
          align="left"
          :class="{ 'mb-10': cmsData.button }"
        />
        <ws-link v-if="cmsData.button" :cms-data="cmsData.button" />
      </div>
    </div>
    <div v-else class="columns is-multiline">
      <div class="column is-6 is-12-touch">
        <ws-title
          :title="cmsData.title"
          :description="cmsData.text"
          align="left"
        />
        <ws-link
          v-if="cmsData.button"
          :title="cmsData.button.title"
          :url="
            cmsData.button.file ? cmsData.button.file.url : cmsData.button.url
          "
          :target="cmsData.button.target ? '_blank' : ''"
          class="mt-25"
        />
      </div>
      <div class="column is-6 is-12-touch">
        <div v-if="cmsData.images.length === 1" class="image">
          <ws-image
            :src="$getImageUrlFromCms(cmsData.images[0])"
            :alt="cmsData.images[0].alternativeText"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'

export default {
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
      carouselData: 0,
      hooperSettings: {
        itemsToShow: 1,
        itemsToSlide: 1,
        centerMode: true,
        infiniteScroll: true,
        keysControl: true,
        autoPlay: false,
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

  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev()
    },
    slideNext() {
      this.$refs.carousel.slideNext()
    },
  },
}
</script>

<style lang="scss" scoped>
.columns {
  display: flex;
  @include touch {
    flex-direction: column-reverse;
  }
}
.image {
  margin-right: 10px;
  z-index: 1;
  @include touch {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;
    max-width: 500px;
    height: auto;
  }
}
.content-slider {
  position: absolute;
  width: 100%;
  padding: 0.75rem;
  top: 22px;
  left: -3px;
  @include desktop-only {
    left: 1px;
    top: 16px;
  }
  @media screen and (max-width: 1160px) and (min-width: 1039px) {
    left: -2px;
    top: 16px;
  }
  @include touch {
    top: 21px;
    left: 2px;
  }
  @include mobile {
    top: 15px;
    left: 2px;
  }
}
.slider {
  position: relative;
  z-index: 2;
  margin-left: auto;
  margin-right: auto;
  max-width: 398px;
  width: 76%;

  @media screen and (max-width: 1160px) and (min-width: 1039px) {
    width: 75%;
  }

  @include touch {
    height: auto;
    max-width: 377px;
  }
  button.next,
  button.prev {
    color: $white;
    background: $blue-medium;
    appearance: none;
    border: 0;
    border-radius: 70%;
    width: 28px;
    height: 28px;
    position: absolute;
    top: 47%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: opacity 0.2s linear;
    z-index: 2;
    &:hover {
      opacity: 0.8;
    }
    img {
      margin-right: 3px;
    }
    @include touch {
      display: none;
    }
  }
  button.prev {
    left: 20px;
  }
  button.next {
    right: 20px;
    transform: rotate(180deg);
  }
  .hooper {
    width: 100%;
    height: auto;
    @include touch {
      height: auto;
    }
  }
  .hooper-slide {
    position: relative;
    color: $white;
    display: flex;
    width: 100%;
    background: linear-gradient(180deg, #ffffff 0%, #f5f7f8 100%);
    .content-slide {
      z-index: 2;
      display: flex;
      align-items: top;
      flex-direction: column;
    }
  }
  .hooper-pagination {
    bottom: -30px;
    .hooper-indicator {
      background: #bcd2e4;
    }
    .hooper-indicator.is-active {
      background: $green;
    }
  }
}
@include touch {
  .ws-title,
  .button {
    margin-bottom: 2rem !important;
  }
}
</style>
