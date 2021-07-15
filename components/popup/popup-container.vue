<template>
  <div class="modal" :class="{ 'is-active': show }">
    <div v-if="cmsData" class="modal-content">
      <request-demo-form
        v-if="popup.substring(0, 8) === 'get_demo'"
        :cms-data="cmsData"
        :product="popup.substring(9)"
      />
      <request-prices-form
        v-else-if="popup.substring(0, 15) === 'request_pricing'"
        :cms-data="cmsData"
        :product="popup.substring(16)"
      />
      <request-sales-form
        v-else-if="popup === 'request_sales'"
        :cms-data="cmsData"
      />
      <request-partner-form
        v-else-if="popup === 'partner'"
        :cms-data="cmsData"
      />
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('close')"
    />
  </div>
</template>

<script>
import RequestDemoForm from './request-demo.vue'
import RequestPricesForm from './request-prices.vue'
import RequestSalesForm from './request-sales.vue'
import RequestPartnerForm from './request-partner.vue'

export default {
  components: {
    RequestDemoForm,
    RequestPricesForm,
    RequestSalesForm,
    RequestPartnerForm,
  },

  props: {
    popup: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    cmsData: null,
  }),

  async fetch() {
    const { data } = await this.$axios.get(
      this.$getUrlFromCms('/forms?_locale=' + this.$i18n.localeProperties.iso)
    )
    this.cmsData = { ...data }
  },

  watch: {
    show(_new) {
      const backdrop = document.getElementById('modal-backdrop')
      if (_new === true) {
        backdrop.classList.add('is-active')
      } else {
        backdrop.classList.remove('is-active')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-content {
  z-index: $z-index-popup + 1;
}

.modal-close {
  z-index: $z-index-popup + 2;
}

@include desktop {
  .modal-content {
    max-height: calc(100vh - 100px);
  }
}
</style>
