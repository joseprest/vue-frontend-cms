<template>
  <div class="ws-title" :class="[color, getTextAlignment]">
    <h2
      v-if="title || $slots.default"
      class="ws-title__title"
      :class="[color, `size-${size}`, { 'no-green-bar': !showGreenBar }]"
    >
      <slot>
        <span v-html="title"></span>
      </slot>
    </h2>
    <span v-if="beta" class="beta" :class="locale">Beta</span>
    <p
      v-if="description || $slots.description"
      class="ws-title__description"
      :class="[color, getTextAlignment]"
    >
      <slot name="description">
        {{ description }}
      </slot>
    </p>
    <p
      v-if="description2 || $slots.description2"
      class="mt-10 ws-title__description"
      :class="[color, getTextAlignment]"
    >
      <slot name="description2">
        {{ description2 }}
      </slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'WsTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    description2: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: 'center',
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
    showGreenBar: {
      type: Boolean,
      default: true,
    },
    beta: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      locale: 'en',
    }
  },

  computed: {
    getTextAlignment() {
      let alignment = 'has-text-'
      switch (this.align) {
        case 'center':
          alignment += 'centered'
          break
        default:
          alignment += this.align
          break
      }

      return alignment
    },
  },

  created() {
    // TODO: detect current locale and update locale
    // this.locale = i18n.locale
    // EventBus.$on('changedLanguage', (newLanguage) => {
    //   this.locale = newLanguage
    // })
  },
}
</script>

<style lang="scss" scoped>
$size-draw: 100px;
$size-draw-small: 50px;

.ws-title {
  margin-bottom: 3rem;
  position: relative;

  &.inverted {
    color: white;
  }
  &.underline {
      .ws-title__title {
        &:before {
          display: none;
        }
        &:after {
          content: '';
          background: url('~/assets/imgs/title-divider.svg') no-repeat center;
          position: absolute;
          bottom: -20px;
          left: 0;
          right: auto;
          height: 10px;
          width: $size-draw;
        }
      }
       &.has-text-centered {
        .ws-title__title {
          &:after {
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
       }
    }

  &__title {
    line-height: 1.4;
    margin: 0 0 10px 0;
    font-weight: $weight-semibold;
    position: relative;
    padding-top: 30px;

    &.size-normal {
      font-size: $size-2;

      @include mobile {
        font-size: 1.8rem;
      }
    }

    &.size-small {
      font-size: $size-4;
      padding-top: 20px;
      &:before {
        background: url('~/assets/imgs/title-divider-small.svg') no-repeat
          center;
        width: $size-draw-small;
      }
    }

    &.inverted {
      color: white;

      &:before {
        background: url('~/assets/imgs/title-divider-white.svg') no-repeat
          center;
      }
    }

    &.no-green-bar {
      padding-top: 0px;
      &:before {
        background: none;
      }
    }
    

    &:before {
      content: '';
      background: url('~/assets/imgs/title-divider.svg') no-repeat center;
      position: absolute;
      top: 0;
      left: 0;
      right: auto;
      height: 10px;
      width: $size-draw;
    }
  }
  .beta {
    display: inline-block;
    padding: 3px 10px;
    background: $green;
    border-radius: 30px;
    color: $white;
    font-size: 0.8rem;
    position: absolute;

    top: 44px;
    left: 87px;
    font-weight: 600;
    @include mobile {
      top: 36px;
      left: 69px;
    }
  }
  .beta.fr {
    left: 134px;
    @include mobile {
      left: 108px;
    }
  }

  &__description {
    font-size: $size-6;
    line-height: 1.6;
    margin: 0;
    max-width: 100%;
    font-weight: $weight-normal;

    @include mobile {
      font-size: $size-6;
    }
  }

  &.has-text-centered {
    .ws-title__title {
      &:before {
        right: 0;
        margin: 0 auto;
      }
    }
  }

  &.has-text-right {
    .ws-title__title {
      &:before {
        left: calc(100% - #{$size-draw});
      }

      &.size-small {
        &:before {
          left: calc(100% - #{$size-draw-small});
        }
      }
    }
  }

  &.has-text-left {
    .ws-title__title {
      &:before {
        right: 0;
        margin-left: 0;
      }
    }
  }
}
</style>
