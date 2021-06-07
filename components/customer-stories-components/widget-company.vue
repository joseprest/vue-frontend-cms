<template>
  <div class="card customer-widget">
    <div class="card-image">
      <figure class="image">
        <ws-image
          :src="$getImageUrlFromCms(cmsData.image)"
          :alt="cmsData.image.alternativeText"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="info is-flex" :class="{ 'no-border': !cmsData.stats }">
        <div
          v-if="cmsData.text"
          class="rich-text info__description"
          v-html="$md.render(cmsData.text)"
        />
      </div>
      <div v-if="cmsData.stats" class="columns is-12 props">
        <div
          v-for="item in cmsData.stats"
          :key="`stats${item.id}`"
          class="column is-4"
        >
          <div class="info is-flex no-border">
            <p class="info__title">{{ item.title }}</p>
            <p class="info__description">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetCompany',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.card.customer-widget {
  background: #fafafa;
  box-shadow: none;
  margin-bottom: 15px;

  .card-image {
    padding: 15px;
    padding-top: 30px;

    figure {
      img {
        margin: auto;
        width: 80%;
      }
    }
  }

  .card-content {
    padding: auto 30px;

    .props {
      margin-top: 15px;
    }
  }
}

.card.mesfruits {
  padding-bottom: 15px;
  .card-image {
    padding: 0 15px;
  }
  .card-content {
    .info {
      padding: 0px 15px 10px;
    }
  }
}

.info {
  text-align: center;
  border-bottom: 1px solid $grey-lighter;
  padding-bottom: 15px;
  margin-bottom: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  &.no-border {
    border-bottom: 0 !important;
  }

  &__title {
    font-weight: $weight-semibold;
    font-size: $size-7;
    margin-bottom: 5px;
  }

  &__description {
    font-size: calc(#{$size-7} - 0.1rem);
    color: $grey;

    p + p {
      margin-top: 0.35rem;
    }
  }
}
</style>
