<template>
  <div>
    <button class="prev" @click.prevent="slidePrev">
      <img src="@/assets/imgs/arrow.svg" alt="prev" />
    </button>
    <button class="next" @click.prevent="slideNext">
      <img src="@/assets/imgs/arrow.svg" alt="next" />
    </button>
    <hooper
      v-if="showSlider"
      ref="carousel"
      :settings="hooperSettings"
      class="testimonials"
    >
      <template v-for="(testimonial, idx) in cmsData.testimonials">
        <slide
          v-if="!testimonial['no-testimonial']"
          :key="testimonial.id"
          :index="idx"
        >
          <div class="content-slide">
            <story
              :testimonial="testimonial"
              :full-story="cmsData.read_full_title"
            />
          </div>
        </slide>
      </template>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Pagination as HooperPagination, Slide } from 'hooper'
import Story from './story.vue'

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    Story,
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
        itemsToShow: 2,
        itemsToSlide: 1,
        centerMode: false,
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
            itemsToShow: 2,
          },
        },
      },
      showSlider: true,
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
button.next,
button.prev {
  color: $white;
  background: $blue-medium;
  appearance: none;
  border: 0;
  border-radius: 70%;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s linear;
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
  left: -50px;
}
button.next {
  right: -50px;
  transform: rotate(180deg);
}
</style>
<style lang="scss">
.testimonials {
  .hooper {
    width: 100%;
    height: 210px;
    @include touch {
      height: auto;
    }
    @include mobile {
      border-bottom: 1px solid rgba($blue-dark, 0.1);
    }

    &-slide {
      position: relative;
      border-radius: 10px;
      border: 6px solid $white;
      color: $white;
      display: flex;
      padding: 20px;
      border-radius: 20px;
      background: linear-gradient(180deg, #ffffff 0%, #f5f7f8 100%);
      @include mobile {
        border: 0;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        border-radius: inherit;
        border: 1px solid #bcd2e4;
        opacity: 0.4;
      }
      .content-slide {
        z-index: 2;
        display: flex;
        align-items: top;
        flex-direction: column;
        .text {
          font-size: 0.8em;
          margin: 5px 10px;
        }
        .link {
          z-index: 1;
        }
        .infos {
          z-index: 0;
        }
        @include touch {
          display: block;
          .text {
            margin: 0;
            display: block;
          }
          .link {
            position: relative;
            display: block;
            left: inherit;
            bottom: inherit;
            margin-top: 15px;
          }
          .infos {
            position: relative;
            display: block;
            bottom: inherit;
            right: inherit;
            float: right;
            margin-top: 20px;
            max-width: 100%;
            .logo,
            .name,
            .job {
              position: relative;
              display: block;
              left: inherit;
              top: inherit;
              width: 100%;
              max-width: 100%;
            }
            .logo {
              img {
                max-width: 90px;
                max-height: 80px;
              }
            }
          }
        }
      }
    }

    &-pagination {
      bottom: -30px;
      .hooper-indicator {
        background: #bcd2e4;
      }
      .hooper-indicator.is-active {
        background: $green;
      }
    }
  }
}
</style>
