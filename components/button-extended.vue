<template>
  <component
    :is="cmsData.file || $isExternalUrl(cmsData.url) ? 'a' : 'nuxt-link'"
    :to="
      !cmsData.file && !$isExternalUrl(cmsData.url)
        ? localePath(cmsData.url)
        : ''
    "
    :href="
      cmsData.file
        ? $getUrlFromCms(cmsData.file.url)
        : $isExternalUrl(cmsData.url)
        ? cmsData.url
        : localePath(cmsData.url)
    "
    class="box is-flex"
    :class="`box-${color}`"
  >
    <figure v-if="cmsData.icon" class="image">
      <img :src="$getImageUrlFromCms(cmsData.icon)" :alt="cmsData.title" />
    </figure>
    <div class="content">
      <p class="title">
        {{ cmsData.title }}
      </p>
      <p v-if="cmsData.text" class="subtitle">
        {{ cmsData.text }}
      </p>
    </div>
  </component>
</template>

<script>
export default {
  name: 'ButtonExtended',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
    color: {
      type: String,
      default: 'green',
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  display: flex;
  align-items: center;
  figure {
    margin-right: 20px;
    display: flex;
    justify-content: center;
    img {
      min-width: 65px;
      width: 65px;
      height: auto;
    }
  }
  .title {
    display: block;
    font-weight: 500;
    color: $gray-dark;
    margin-bottom: 0;
    font-size: 1.25rem;
    @include mobile {
      font-size: 1.4rem;
    }
  }
  .subtitle {
    margin-top: 5px;
    font-size: 0.9rem;
    @include mobile {
      font-size: 1rem;
    }
  }
}

.box-blue {
  .title {
    color: #35cefd;
  }
  &:hover,
  &:focus {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #35cefd;
  }
}

.box-green {
  .title {
    color: #2bc47b;
  }
  &:hover,
  &:focus {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #2bc47b;
  }
}

.box-violet {
  .title {
    color: #999bc5;
  }
  &:hover,
  &:focus {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #999bc5;
  }
}

.box-dark-blue {
  .title {
    color: #5b79a1;
  }
  &:hover,
  &:focus {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #5b79a1;
  }
}

.disabled {
  background-color: #eff4f7;

  &:hover {
    box-shadow: 1px 1px 5px rgba(10, 10, 10, 0.25);
    cursor: not-allowed;
    color: #7a7a7a;
  }
}
</style>
