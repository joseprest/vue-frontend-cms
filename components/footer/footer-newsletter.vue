<template>
  <div class="newsletter">
    <p>{{ cmsData.title }}</p>
    <div class="field">
      <div id="input" class="control">
        <input
          v-model="email"
          class="input no-border"
          type="email"
          :placeholder="cmsData.placeholder"
        />
      </div>
      <div id="button" class="control">
        <button
          class="button is-success inverted no-border"
          :class="{ 'is-loading': sending }"
          :disabled="sending"
          @click.prevent="send"
        >
          {{ cmsData.button_text }}
        </button>
      </div>
    </div>

    <transition name="fade">
      <div v-show="error && !success">
        <p class="notification help is-danger">{{ errorMsg }}</p>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="!error && success" class="notification is-success">
        {{ cmsData.success_message }}
      </div>
    </transition>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
// eslint-disable-next-line import/extensions
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'FooterNewsletter',

  mixins: [validationMixin],

  validations: {
    email: { required, email },
  },

  props: {
    cmsData: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      email: null,
      sending: false,
      success: false,
      error: null,
      errorMsg: null,
    }
  },

  methods: {
    async send() {
      if (!this.validate()) return false

      this.$gtm.push({
        event: 'uaevent',
        category: 'lead generation',
        action: 'subscribe to the newsletter',
        label: 'body',
      })

      try {
        this.sending = true
        await this.$sendFormToBackend('subscribeNewsletter', {
          email: this.email,
        })
        this.success = true
      } catch (err) {
        if (err.status === 500) {
          this.errorMsg =
            'Ops! Something went wrong with our server! Send us a message to contact@site.com, please!'
        } else {
          try {
            const allErrors = err.data.errors
            if (!allErrors) {
              this.errorMsg = err.data
            }
            for (const error in allErrors) {
              this.errorMsg += allErrors[error]?.join(', ')
            }
          } catch {
            this.errorMsg =
              'Ops! Something went wrong with our server! Send us a message to contact@site.com, please!'
          }
        }
        this.error = true
      } finally {
        this.sending = false
      }
    },

    validate() {
      this.error = false
      this.success = false
      this.errorMsg = null

      this.$v.$touch()

      if (this.$v.$invalid) {
        this.error = true
        if (this.$v.email.$error) {
          if (this.$i18n.locale === 'fr') {
            this.errorMsg = 'Ops! E-mail invalide!'
          } else if (this.$i18n.locale === 'de') {
            this.errorMsg = 'Ops! E-mail ungültig!'
          } else {
            this.errorMsg = 'Ops! E-mail invalid!'
          }
        }
      }

      return !this.$v.$invalid
    },
  },
}
</script>

<style lang="scss" scoped>
.newsletter {
  margin-top: 10px;
  .button.is-success {
    background: transparent;
    color: $white;
    border: 1px solid rgba($white, 0.5);
    width: 100%;
    &:hover {
      color: $blue-dark;
    }
  }
  .notification {
    font-size: 0.75rem;
    line-height: 1.1rem !important;
    padding: 10px 0;
    margin-top: -0.5rem;
    border: 0;
  }
  .notification.is-danger {
    background: $green;
    color: #c43e2b;
  }
  p {
    line-height: 1em !important;
    margin-bottom: 1em;
  }
  .field {
    max-width: 350px;
  }
  @include touch {
    .has-addons {
      display: flex !important;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
