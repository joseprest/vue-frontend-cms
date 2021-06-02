<template>
  <div class="modal" :class="{ 'is-active': show }">
    <!--    <div class="modal-background"></div>-->
    <div class="modal-content">
      <request-demo-form v-if="cmsData" :cms-data="cmsData" />
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

export default {
  components: {
    RequestDemoForm,
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

  async created() {
    const { data } = await this.$axios.get(
      this.$getUrlFromCms('/forms?_locale=' + this.$i18n.localeProperties.iso)
    )
    this.cmsData = { ...data }
  },
}
</script>

<style lang="scss" scoped>
.modal-background {
  z-index: $z-index-popup;
}

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
