<template>
  <div class="stack">
    <div class="content">
      <div class="title">
        <h2 class="has-text-weight-semibold is-size-3">
          {{ cmsData.title }}
        </h2>
      </div>
      <div v-html="$md.render(cmsData.caption)" />
      <div class="separator"></div>
      <div class="columns">
        <div class="levels column is-three-fifths">
          <div
            v-for="(item, index) in cmsData.text_titled"
            :key="`stack-item-${item.id}`"
            :class="`level${index + 1}`"
          >
            <h3 class="title">{{ item.title }}</h3>
            <div class="text" v-html="$md.render(item.text)" />
          </div>
        </div>
        <div class="column">
          <div class="animation">
            <div class="bg">
              <div class="picto picto-level1">
                <ws-image
                  :src="require('@/assets/imgs/about/stack-level1.svg')"
                  alt="app"
                />
              </div>
              <div class="picto picto-level2">
                <ws-image
                  :src="require('@/assets/imgs/about/stack-level2.svg')"
                  alt="cloud"
                />
              </div>
              <div class="picto picto-level3">
                <ws-image
                  :src="require('@/assets/imgs/about/stack-level3.svg')"
                  alt="box"
                />
              </div>
              <div class="picto picto-level4">
                <ws-image
                  :src="require('@/assets/imgs/about/stack-level4.svg')"
                  alt="building"
                />
              </div>
              <div class="down">
                <ws-image
                  :src="require('@/assets/imgs/about/stack-down.svg')"
                  alt="down"
                />
              </div>
              <div class="up">
                <ws-image
                  :src="require('@/assets/imgs/about/stack-up.svg')"
                  alt="up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line" />
  </div>
</template>

<script>
export default {
  name: 'Stack',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.stack {
  color: $white;
  padding-bottom: 20px;
  strong {
    color: $white;
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
        width: 65%;
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
  .separator {
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      white 0%,
      rgba(255, 255, 255, 0) 80%
    );
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .levels {
    .title {
      color: $white;
      margin-bottom: 20px;
    }
    .level1,
    .level2,
    .level3 {
      margin-bottom: 40px;
    }
    .level4 {
      margin-bottom: 0;
    }
    h3 {
      @include mobile {
        flex-direction: row;
      }
    }
  }
  .animation {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .bg {
      width: 143px;
      height: 100%;
      border-radius: 10px;
      background: rgba($gray-darker, 0.3);
      position: relative;
      .picto {
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
      }
      .down,
      .up {
        position: absolute;
      }
      .up {
        top: 60px;
        right: -40px;
      }
      .down {
        top: 60px;
        left: -40px;
      }
    }
  }
}
</style>
