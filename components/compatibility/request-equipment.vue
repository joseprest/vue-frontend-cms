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
        :disabled="sending"
        @click.prevent="send"
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
    <template v-else>Success!</template>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
// eslint-disable-next-line import/extensions
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'RequestEquipment',

  mixins: [validationMixin],

  validations: {
    info: { required },
    email: { required, email },
  },

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

  methods: {
    async send() {
      if (!this.validate()) return false

      this.$gtm.push({
        event: 'uaevent',
        category: 'lead generation',
        action: 'subscribe to compatibility form',
        label: 'body',
      })

      try {
        this.sending = true
        await this.$sendFormToBackend('requestEquipment', {
          info: this.info,
          user: this.email,
        })
        this.success = true
      } catch (err) {
        if (err.status === 500) {
          this.errorMsg = this.cmsData.error_server_text
        } else {
          try {
            const allErrors = err.data.errors
            if (!allErrors) {
              this.errorMsg = err.data || this.cmsData.error_server_text
            }
            for (const error in allErrors) {
              this.errorMsg += allErrors[error]?.join(', ')
            }
          } catch {
            this.errorMsg = this.cmsData.error_other_text
          }
        }
        this.error = true
      } finally {
        this.sending = false
      }
    },

    validate() {
      this.success = false
      this.error = false

      this.$v.$touch()

      if (this.$v.$invalid) {
        if (this.$v.info.$error) {
          this.errorMsg = 'Model invalid'
          this.error = true
          return false
        }

        if (this.$v.email.$error) {
          this.errorMsg = 'E-mail invalid'
          this.error = true
          return false
        }
      }

      return !this.$v.$invalid
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
