<template>
  <form class="subscribe is-clearfix">
    <template v-if="!success">
      <p class="mb-25">
        {{ cmsData.form_text }}
      </p>

      <input
        v-model="info"
        class="input"
        type="text"
        :placeholder="cmsData.form_model"
      />

      <input
        v-model="email"
        class="input mt-15"
        type="text"
        :placeholder="cmsData.form_email"
      />

      <button
        type="button"
        class="button is-pulled-right mt-15"
        :class="{ 'is-loading': sending }"
        :disabled="!info || !emailIsOk || sending"
        @click="send"
      >
        <span v-if="!sending">
          {{ cmsData.form_button_text }}
        </span>
        <span v-else>
          {{ cmsData.form_button_sending }}
        </span>
      </button>
      <p
        v-if="error && !success"
        class="help is-danger has-background-light mt-15 has-text-centered"
      >
        {{ errorMsg }}
      </p>
    </template>
    <template v-else>
      {{ $t('compatibility.subscription.success') }}
    </template>
  </form>
</template>

<script>
import BackEndServices from '@/services/BackEnd.services'

export default {
  name: 'RequestEquipment',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      email: null,
      info: null,
      sending: false,
      success: false,
      error: null,
      errorMsg: '',
    }
  },

  computed: {
    emailIsOk() {
      return BackEndServices.isEmailValid(this.email)
    },
  },

  methods: {
    async send() {
      this.error = null
      this.sending = true
      this.success = false
      this.errorMsg = this.$t('compatibility.subscription.error-email')

      this.$gtm.push({
        event: 'uaevent',
        category: 'lead generation',
        action: 'subscribe to compatibility form',
        label: 'body',
      })

      try {
        await BackEndServices.requestEquipment(this.email, this.info)
        this.error = null
        this.success = true
      } catch (err) {
        if (typeof err === 'string') {
          this.errorMsg = err
          this.error = true
        } else if (err.response) {
          if (err.response.status !== 400) {
            this.errorMsg = this.cmsData.error_server_text
            this.error = true
          } else this.success = true
        } else {
          this.errorMsg = this.cmsData.error_other_text
          this.error = true
        }
      } finally {
        this.sending = false
      }
    },
  },
}
</script>

<style scoped lang="scss">
.subscribe {
  border-radius: $radius;
  background: $primary linear-gradient(-15deg, $success, $primary);
  color: $white;
  padding: 2.5rem 1.5rem;
  max-width: 298px;
  width: 100%;
  @include touch {
    margin-left: auto;
    margin-right: auto;
    max-width: 350px;
  }
  @include mobile {
    max-width: 100%;
  }
}

.button {
  background: rgba(0, 0, 0, 0.3);
  border: none;
  color: $white;

  &.sending {
    background: transparent;
    cursor: default;
  }
}

.help {
  float: left;
  width: 100%;
  padding: 9px 5px;
  border-radius: 3px;
  font-size: 0.8rem;
}
</style>
