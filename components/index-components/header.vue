<template>
  <header class="section main-header">
    <Navbar :cms-data="navbarData" :home="true" />
    <div v-if="cmsData" class="container header">
      <div class="columns is-vcentered is-multiline">
        <div id="columnapi" class="column is-12">
          <figure class="image is-hidden-tablet new-box-pic">
            <ws-image
              :src="$getUrlFromCms(cmsData.image.url)"
              alt="Wattsense Box"
            />
          </figure>
          <h1
            class="title is-size-3 has-text-weight-semibold has-text-grey-darker"
          >
            {{ cmsData.title }}
          </h1>
          <h2
            class="subtitle is-size-6 has-text-weight-light has-text-grey-darker"
            style="line-height: 1.8"
          >
            {{ cmsData.slogan }}
          </h2>
        </div>
        <div id="columnactions" class="column is-12">
          <p class="buttons">
            <!-- <ws-button class="mr-10" @click="requestDemo('box')"> -->
            <ws-button
              v-for="btn in cmsData.buttons"
              :key="`head-btn-${btn.id}`"
              class="mr-10"
              :cms-data="btn"
            />
          </p>
        </div>
        <div
          v-if="!isMobile"
          id="columnvideo"
          class="column is-12 has-text-centered is-hidden-mobile"
        >
          <div class="video">
            <figure class="image new-box-pic">
              <ws-image
                :src="$getUrlFromCms(cmsData.image.url)"
                :alt="cmsData.image.alternativeText || 'Wattsense Box'"
              />
            </figure>

            <video
              autoplay
              loop
              muted
              :poster="$getUrlFromCms(cmsData.animation_image.url)"
            >
              <source
                v-for="animation in cmsData.animation"
                :key="`animation${animation.id}`"
                :src="$getUrlFromCms(animation.url)"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from './../navbar.vue'

export default {
  name: 'IndexHeader',
  components: {
    Navbar,
  },

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
    navbarData: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      columnapiheight: null,
      isMobile: false,
    }
  },

  computed: {
    /**
     * If browser is IE, get the height of column to pass to SVG
     *
     * @return null|number
     */
    heightColumnApi() {
      if (this.isIE()) {
        return document.querySelector('#columnapi').clientHeight
      }

      return null
    },
  },

  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    /**
     * After component is mounted, if browser is IE, get the height and pass to animation
     */
    if (this.isIE()) {
      this.columnapiheight = this.heightColumnApi
    }
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 670
    },

    // requestDemo(product) {
    // 	this.$gtm.push({
    // 		event: "uaevent",
    // 		category: "navigation",
    // 		action: "get a demo",
    // 		label: "body",
    // 	});

    // 	EventBus.$emit("openRequestDemo", product);
    // },

    /*
     * Check if browser is IE
     */
    isIE() {
      const inBrowser = typeof window !== 'undefined'
      const UA = inBrowser && window.navigator.userAgent.toLowerCase()
      return UA && /msie|trident/.test(UA)
    },
  },
}
</script>

<style lang="scss" scoped>
$navbar-height: 92px;
$min-height-for-video: 558px;

.main-header {
  background: #eaeaea;
  position: relative;
  padding-top: 0;
  height: 100%;
  margin-bottom: 3rem;

  .container {
    width: 90vw;
    max-width: 90vw !important;
    padding-left: 0;
    padding-right: 0;

    &.header {
      height: calc(100% - #{$navbar-height});
      padding-top: 0;

      @include mobile {
        height: calc(100% - #{$navbar-height});
      }

      .title:not(.is-spaced) + .subtitle {
        margin-top: -1rem;
      }
    }

    .columns {
      height: 100%;
      @include mobile {
        height: unset;
      }

      #columnvideo {
        order: 1;
      }

      #columnapi {
        order: 2;
        width: 100%;
        min-height: 235px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        @include desktop {
          width: 640px;
        }

        @include widescreen {
          width: 750px;
        }
      }
      #columnactions {
        order: 3;
        display: flex;
        justify-content: flex-start;
        .buttons {
          margin-bottom: 1rem;

          .button {
            min-width: 205px;

            @include mobile {
              width: 100%;
              margin-right: 0 !important;
            }
          }
          .button {
            &:first-child {
              @include mobile {
                margin-bottom: 1.5rem;
              }
            }
          }
        }
      }
      #columnlogos {
        order: 4;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        @include mobile {
          justify-content: center;
          padding-top: 0;
          padding-bottom: 35px;
        }
        @include tablet-only {
          padding-top: 0;
          padding-bottom: 35px;
        }
        p {
          opacity: 0.4;
          font-size: $size-7;
        }
        img {
          max-height: 40px;
          max-width: 70px;
          margin-left: 10px;
          margin-bottom: 1rem;
        }
      }
    }
  }
}

.video {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-height: 870px) {
    height: 430px;
  }

  @media (max-height: 796px) {
    height: 350px;
  }

  .new-box-pic {
    display: none;
    max-width: 80%;
    height: 100%;

    img {
      height: 100%;
      width: auto;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-height: $min-height-for-video) {
      display: block;
    }

    @include mobile {
      display: block;
    }
  }

  video {
    height: 100%;
    width: auto;

    @media (max-height: $min-height-for-video) {
      display: none;
    }

    @include mobile {
      display: none;
    }
  }
}
</style>
