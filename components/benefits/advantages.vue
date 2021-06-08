<template>
  <div class="advantages">
    <div class="desktop">
      <ws-image
        :src="$getImageUrlFromCms(cmsData.image)"
        :alt="cmsData.image.alternativeText"
      />
    </div>
    <div class="section-title mb-0">
      <ws-title :title="cmsData.title" class="has-text-left mb-0" />
    </div>

    <div class="columns is-multiline">
      <div
        v-for="adv in cmsData.advantages"
        :key="`advantage${adv.id}`"
        class="column is-4"
      >
        <div class="advantage">
          <div class="icon">
            <ws-image
              :src="$getImageUrlFromCms(adv.image)"
              :alt="adv.image.alternativeText"
            />
          </div>
          <div class="title has-text-weight-semibold" v-html="adv.title"></div>
          <div class="description" v-html="$md.render(adv.text)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    cmsData: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: null,
    },
    category: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.advantages {
  margin-bottom: 2rem;
  .section-title {
    margin-right: 425px;
    @include touch {
      margin-right: 0;
    }
  }
  .desktop {
    position: absolute;
    top: -186px;
    right: 0;
    img {
      max-width: 350px;
      height: auto;
    }
    @include desktop-only {
      img {
        max-width: 300px;
      }
    }
    @include touch {
      position: initial;
      margin-left: auto;
      margin-right: auto;
      display: table;
      margin-bottom: 2em;
      img {
        max-width: 300px;
      }
    }
  }
}

.advantage {
  margin-top: 20px;
  .title {
    font-size: 1.35rem;
    margin-top: 20px;
    margin-bottom: 14px;
  }
  .icon {
    width: auto;
    height: 60px;
    img {
      width: auto;
      height: 60px;
    }
  }
}
</style>
