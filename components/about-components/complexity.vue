<template>
  <div class="complexity">
    <div class="content">
      <div class="title">
        <h2 class="has-text-weight-semibold is-size-3">{{ cmsData.title }}</h2>
      </div>
      <div class="text" v-html="$md.render(cmsData.text)"></div>
      <div class="connectors">
        <div class="actors">
          <div class="actor text has-text-weight-semibold is-size-5">
            {{ cmsData.actor1 }}
          </div>
          <div class="actor customer">
            <img
              src="@/assets/imgs/about/complexity-customer.svg"
              alt="customer"
            />
          </div>
          <div class="actor arrows">
            <img
              id="arrow-right"
              src="@/assets/imgs/about/complexity-arrow-right.svg"
              alt="left"
            />
            <img
              id="arrow-left"
              src="@/assets/imgs/about/complexity-arrow-left.svg"
              alt="right"
            />
          </div>
          <div class="actor site">
            <img
              src="@/assets/imgs/about/complexity-site.svg"
              alt="site"
            />
          </div>
        </div>

        <div class="protocols is-hidden-touch">
          <img
            class="bg"
            src="@/assets/imgs/about/complexity-animation-bg-min.png"
            alt="protocols"
          />
          <div class="protocol-container">
            <Animation :protocols="cmsData.protocols_list" />
            <div class="mask-left">
              <img
                src="@/assets/imgs/about/complexity-mask-left.svg"
                alt="mask"
              />
            </div>
            <div class="mask-right">
              <img
                src="@/assets/imgs/about/complexity-mask-right.svg"
                alt="mask"
              />
            </div>
          </div>
        </div>
        <div class="mask-words"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Animation from './animation.vue'

export default {
  name: 'Complexity',
  components: {
    Animation,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.complexity {
  transform: skewY(4deg);
  padding-top: 40px;
  padding-bottom: 20px;
  position: relative;
  @include touch {
    margin-bottom: 2em;
  }
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
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
        margin-top: 5px;
        margin-left: -5px;
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
  .text {
    width: 50%;
    @include touch {
      width: 100%;
    }
  }
  .connectors {
    margin-top: 80px;
    margin-left: 80px;
    @include touch {
      margin-top: 40px;
      margin-left: 0;
    }
    .actors {
      display: flex;
      align-items: center;
      flex-direction: row;
      z-index: 1;
      .actor {
        margin-right: 20px;
      }
      .actor.text {
        color: $blue-medium;
        width: 120px;
        word-break: break-word;
      }
      .actor.arrows {
        display: flex;
        flex-direction: column;
      }
    }
    .protocols {
      position: absolute;
      top: 35%;
      left: 40%;
      z-index: -1;
      @include mobile {
        position: relative;
        top: 40px;
        left: 0;
      }
      @include tablet-only {
        position: relative;
        top: 40px;
        left: 0;
      }
      @include desktop-only {
        left: 55%;
      }
      @include widescreen-only {
        left: 45%;
      }
      img.bg {
        @include mobile {
          visibility: hidden;
        }
        @include tablet-only {
          visibility: hidden;
        }
      }
      .protocol-container {
        .mask-left {
          position: absolute;
          top: 2px;
          left: -363px;
          z-index: 2;
          @include mobile {
            display: none;
          }
          @include tablet-only {
            display: none;
          }
          @include desktop-only {
            top: 4px;
            left: -155px;
            width: 82%;
          }
          @include widescreen-only {
            top: -5px;
            left: -253px;
            width: 91%;
          }
        }
        .mask-right {
          position: absolute;
          top: 0;
          right: -181px;
          z-index: 2;
          @include mobile {
            display: none;
          }
          @include tablet-only {
            display: none;
          }
          @include desktop-only {
            top: 3px;
            right: -95px;
            width: 82%;
          }
          @include widescreen-only {
            top: 0;
            right: -165px;
            width: 91%;
          }
        }
      }
    }
    @include desktop-only {
      .mask-words {
        position: absolute;
        top: 160px;
        left: -160px;
        width: 490px;
        height: 250px;
        z-index: -1;
        background: linear-gradient(180deg, #f7fbfe 0%, #fbfeff 116.38%);
      }
    }
    @include widescreen-only {
      .mask-words {
        position: absolute;
        top: 159px;
        left: 0;
        width: 200px;
        height: 370px;
        z-index: -1;
        background: linear-gradient(180deg, #fefeff 0%, #fbfeff 116.38%);
      }
    }
  }
}
</style>
