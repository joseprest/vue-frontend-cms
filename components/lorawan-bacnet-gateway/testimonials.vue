<template>
  <section v-if="cmsData" class="testimonials landing">
    <div class="container">
      <h3 v-html="cmsData.title" />
      <button class="prev" @click.prevent="slidePrev">
        <img src="~/assets/imgs/arrow.svg" alt="prev" />
      </button>
      <button class="next" @click.prevent="slideNext">
        <img src="~/assets/imgs/arrow.svg" alt="next" />
      </button>
      <client-only>
        <hooper
          ref="carousel"
          :settings="hooperSettings"
          @slide="updateCarousel"
        >
          <slide
            v-for="(testimonial, index) in cmsData.testimonial"
            :key="testimonial.id"
            :index="index"
          >
            <div class="content-slide">
              <div class="story">
                <p class="info">
                  {{ testimonial.title }}
                </p>
                <p class="text">
                  {{ testimonial.content }}
                </p>

                <div class="infos">
                  <p class="name">
                    {{ testimonial.author }}
                  </p>
                  <p class="job">
                    {{ testimonial.author_job }}
                  </p>
                </div>
                <div class="link">
                  <ws-link
                    :title="cmsData.read_full_story_button"
                    :url="testimonial.link"
                    :is-small="true"
                    :is-halftransparent="true"
                    class="mt-25 is-size-7"
                  />
                </div>
              </div>
            </div>
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </client-only>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'

export default {
  name: 'LorawanBacnetGatewayTestimonials',

  components: {
    Hooper,
    Slide,
    HooperPagination,
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
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide
    },
    recreateSlider() {
      this.showSlider = false
      setTimeout(() => {
        this.showSlider = true
      }, 100)
    },
  },
}
</script>

<style lang="scss">
.testimonials.landing {
  .hooper-indicator {
    background-color: #bcd2e4 !important;

    &.is-active {
      background-color: $green !important;
    }
  }
}
</style>
<style lang="scss" scoped>
.testimonials.landing {
  margin-top: 2em;
  @include touch {
    padding-top: 2em !important;
    padding-bottom: 2em !important;
  }
  .container {
    width: 100%;
  }
  h3 {
    font-size: 1.2em;
    color: $green;
    font-weight: 600;
    margin-bottom: 1em;
  }
  button.next,
  button.prev {
    color: $white;
    background: $blue-medium;
    appearance: none;
    border: 0;
    border-radius: 70%;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
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
    right: 60px;
  }
  button.next {
    right: 20px;
    transform: rotate(180deg);
  }
  .hooper {
    width: 100%;
    height: auto;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05) !important;
    border: 1px solid rgba($blue-dark, 0.2);
    border-radius: 10px;
    .hooper-list {
      height: auto;
    }
  }
  .hooper-slide {
    position: relative;
    color: $white;
    display: flex;
    padding: 30px 35px;
    border-radius: 10px;
    .content-slide {
      z-index: 2;
      display: flex;
      align-items: top;
      flex-direction: column;
      .text {
        font-size: 0.8em;
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
  .hooper-pagination {
    bottom: -30px;
  }
}
@include desktop-only {
  .columns {
    display: flex;
    flex-direction: column;
  }
}
@include tablet-only {
  .columns {
    display: flex;
    flex-direction: column;
  }
}

.story {
  .info {
    position: relative;
    font-size: 1em !important;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .text {
    position: relative;
    color: $grey;
    font-size: 0.9em !important;
    margin: 0;
  }
  .link {
    display: block;
    font-size: 0.8em;
    font-weight: bold;
    margin-bottom: 3px;
    a,
    span {
      display: inline-flex;
      align-items: center;
      svg {
        margin-left: 5px;
      }
    }
  }
  .infos {
    display: block;
    margin: 5px 0;
    .job,
    .name {
      color: $grey;
      font-size: 0.9em;
    }
    .name {
      font-weight: 600;
      margin-top: 15px;
    }
    .job {
      font-size: 0.8em;
      opacity: 0.6;
    }
    @include touch {
      float: none !important;
    }
  }
}
</style>
