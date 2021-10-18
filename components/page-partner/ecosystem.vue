<template>
  <div class="container py-6">
    <ws-title :title="cmsData.title" align="center" />
    <div class="columns is-multiline ecosystem-steps">
      <div
        v-for="system in cmsData.systems"
        :key="`customer-system-index-${system.id}`"
        class="column is-6 is-12-mobile"
      >
        <div class="align-top is-flex-column">
          <div class="has-text-left">
            <p class="is-size-4 has-text-weight-bold has-text-grey-light">
              {{ system.tip }}
            </p>
            <p class="description is-size-6">
              {{ system.description }}
            </p>
            <div class="links-wrapper">
              <ws-link
                v-if="system.link_1_url"
                :url="system.link_1_url"
                class="mt-25"
              >
                {{ system.link_1_text }}
              </ws-link>
              <ws-link
                v-if="system.link_2_url"
                :url="system.link_2_url"
                class="mt-25"
              >
                {{ system.link_2_text }}
              </ws-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-centered">
      <ws-button class="mt-20" :cms-data="cmsData.button" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePartnerEcosystem',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  @include touch {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .columns {
    line-height: 2em;
    margin-bottom: 1em;
    @include touch {
      margin-bottom: 0;
    }
  }
}

.ecosystem-steps {
  margin-top: 3rem !important;
  justify-content: space-between;
  border-radius: 5px;
  .column {
    padding: 40px 20px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    .is-flex-column {
      height: 100%;
    }
    .box {
      background: #ffffff;
      box-shadow: 10px 10px 40px rgba(39, 54, 77, 0.1);
      border-radius: 15px;
      figure {
        margin-bottom: 1rem;
        justify-content: center;
        display: flex;
        img {
          height: 250px;
          width: auto;
        }
      }
    }
  }
}
</style>
