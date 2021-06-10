<template>
  <div>
    <ws-title v-if="cmsData.title" :title="cmsData.title" />
    <div class="icon-boxes is-flex mb-35">
      <div
        v-for="item in cmsData.advantages"
        :key="`advantage-${item.id}`"
        class="icon-box has-text-centered"
      >
        <i class="icon-box__icon">
          <ws-image
            :src="$getImageUrlFromCms(item.image)"
            :alt="item.image.alternativeText"
          />
        </i>
        <h2 class="icon-box__title">{{ item.title }}</h2>
        <p class="icon-box__description">{{ item.text }}</p>
      </div>
    </div>

    <div class="demo mb-15">
      <ws-button :cms-data="cmsData.button" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WsAdvantage',
  props: {
    cmsData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.fold-title__description {
  margin-bottom: 80px;
}

.icon-boxes {
  flex-wrap: wrap;
  justify-content: center;
}

.demo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  margin-top: 3rem;
  padding-top: 1.5em;
  @include mobile {
    max-width: 100%;
    white-space: break-spaces;
    line-height: 1.3rem !important;
    padding-top: 1.25em;
  }
}

.icon-box {
  padding: 0 30px;
  flex: 1 1 0;
  &__icon {
    background-repeat: no-repeat;
    background-size: 70px auto;
    background-position: center;
    display: block;
    width: 100%;
    height: 70px;
    margin-bottom: 20px;
  }
  &__title {
    font-size: 18px;
    margin: 0 0 10px;
    font-weight: 600;
    @include mobile {
      font-size: 1.3rem !important;
    }
  }
  &__description {
    font-size: 16px;
    margin: 0;
    @include mobile {
      font-size: 1rem !important;
    }
  }

  &:not(.has-text-centered) {
    .icon-box__icon {
      background-position: left;
    }
  }
}

@media screen and (max-width: 780px) {
  .icon-box {
    flex: 0 0 50%;
    margin-bottom: 40px;
    &__title {
      font-size: 16px;
    }
    &__description {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 480px) {
  .icon-box {
    flex: 0 0 100%;
    &:last-of-type {
      margin-bottom: 0;
    }
    &__icon {
      background-size: 55px auto;
      margin-bottom: 8px;
    }
  }
}
</style>
