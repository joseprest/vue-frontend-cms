<template>
  <div>
    <div class="columns">
      <div class="column is-half is-full-mobile">
        <div class="plugplay">
          <div id="background">
            <!-- TODO: do something with ws-image to replicate the "position:absolute" behaviour of original image -->
            <ws-image
              :src="require('~/assets/imgs/home/plugplay/background.svg')"
              class="background"
              :alt="cmsData.title"
            />
          </div>
          <div id="plug">
            <ws-image
              :src="$getImageUrlFromCms(cmsData.image)"
              class="plug"
              alt="elements"
            />
          </div>
        </div>
      </div>
      <div class="column is-half is-full-mobile">
        <ws-paragraph class="has-text-left">
          <ws-title align="left">
            {{ cmsData.title }}
            <template #description>
              {{ cmsData.description }}
            </template>
          </ws-title>
        </ws-paragraph>
        <p class="buttons">
          <ws-button :cms-data="cmsData.button" class="mt-25" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPluAndPlay',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  methods: {
    // requestDemo(product) {
    // 	this.$gtm.push({
    // 		event: "uaevent",
    // 		category: "navigation",
    // 		action: "get a demo",
    // 		label: "body"
    // 	});
    // 	EventBus.$emit("openRequestDemo", product);
    // },
  },
}
</script>

<style lang="scss" scoped>
.ws-title {
  margin-bottom: 0;
}
.plugplay {
  position: relative;
  width: 100%;
  height: 100%;
  @include widescreen-only {
    width: 530px;
  }
  .background {
    position: absolute;
    top: -26px;
    left: -42px;
    z-index: -1;
    @include desktop-only {
      top: -10px;
      left: -16px;
    }
    @include tablet-only {
      top: -10px;
      left: -16px;
    }
    @include mobile {
      position: relative;
      top: inherit;
      left: inherit;
    }
  }
  #background {
    z-index: 1;
  }
  #plug {
    position: relative;
    width: 100%;
    height: 100%;
    @include mobile {
      position: absolute;
      top: -10px;
      left: 3px;
    }
    .plug {
      position: absolute;
      top: 54px;
      left: 46px;
      z-index: -1;
      @include desktop-only {
        top: 49px;
        left: 49px;
      }
      @include tablet-only {
        top: 37px;
        left: 38px;
      }
      @media only screen and (min-device-width: 480px) and (max-device-width: 580px) {
        top: 87px;
        left: 78px;
      }
    }
    img {
      width: 68%;
    }
  }
}

.button {
  white-space: inherit;
  @include desktop-only {
    display: contents;
  }
  @include touch {
    display: contents;
  }
}
.columns {
  @include mobile {
    flex-direction: column-reverse;
    display: flex;
  }
}
</style>
