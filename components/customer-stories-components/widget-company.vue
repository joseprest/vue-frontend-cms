<template>
  <div class="card customer-widget" :class="company">
    <div class="card-image">
      <figure class="image">
        <ws-image :src="$getImageUrlFromCms(cmsData.image)" :alt="company" />
      </figure>
    </div>
    <div class="card-content">
      <div class="info is-flex" :class="{ 'no-border': !cmsData.stats }">
        <div
          v-if="cmsData.text"
          class="info__description"
          v-html="$md.render(cmsData.text)"
        />
      </div>
      <div class="columns is-12 props">
        <slot name="footer" />
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

  &__description {
    font-size: calc(#{$size-7} - 0.1rem);
    color: $grey;

    p + p {
      margin-top: 0.35rem;
    }

    strong {
      font-weight: $weight-semibold;
      font-size: $size-7;
      margin-bottom: 5px;
    }
  }
}
</style>
