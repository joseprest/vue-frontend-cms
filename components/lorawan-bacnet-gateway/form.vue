<template>
  <form v-if="cmsData" @submit.prevent="submit">
    <div>
      <h2 class="title has-text-centered is-size-4">
        {{ cmsData.title }}
      </h2>
    </div>

    <div v-if="!successSubmitForm">
      <div class="field">
        <label class="label is-size-7" for="name">
          {{ cmsData.name_label }}
        </label>
        <div class="control">
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="input is-medium"
            :class="{ 'is-danger': !!fieldErrors.name }"
            required
          />
        </div>
        <p v-if="fieldErrors.name" class="help is-danger">
          {{ fieldErrors.name }}
        </p>
      </div>

      <div class="field">
        <label class="label is-size-7" for="email">
          {{ cmsData.email_label }}
        </label>
        <div class="control">
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="input is-medium"
            :class="{ 'is-danger': !!fieldErrors.email }"
            required
          />
        </div>
        <p v-if="fieldErrors.email" class="help is-danger">
          {{ fieldErrors.email }}
        </p>
      </div>

      <div class="field">
        <div class="control has-text-centered">
          <button
            type="submit"
            class="button is-success is-inverted has-text-weight-semibold"
            :class="{ 'is-loading': saving }"
            :disabled="saving"
          >
            {{ cmsData.button_label }}
          </button>
        </div>
      </div>
    </div>
    <div v-else class="notification is-info" style="padding: 15px">
      {{ cmsData.success_message }}
    </div>

    <div v-if="errors.length > 0" class="notification is-danger mt-15">
      <div class="content">
        <ul>
          <li v-for="(error, key) in errors" :key="`error_form_${key}`">
            {{ error }}
          </li>
        </ul>
      </div>
    </div>

    <div class="privacy">
      {{ cmsData.privacy_message }}
    </div>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
// eslint-disable-next-line import/extensions
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'LorawanBacnetGatewayForm',

  mixins: [validationMixin],

  validations: {
    form: {
      name: { required },
      email: { required, email },
    },
  },

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      saving: false,
      successSubmitForm: false,
      form: {
        name: null,
        email: null,
      },
      fieldErrors: {},
      errors: [],
    }
  },

  methods: {
    async submit() {
      if (!this.validate()) return false

      try {
        this.saving = true
        await this.$sendFormToBackend('lorawanLeaflet', {
          ...this.form,
          lang: this.$i18n.locale,
        })
        this.successSubmitForm = true

        this.$gtm.push({
          event: 'uaevent',
          category: 'landing gateway',
          action: 'download leaflet',
          label: 'download leaflet',
        })

        window.open(this.cmsData.file.url, '_blank')
      } catch (err) {
        if (err.status === 500) {
          this.errors = [this.cmsData.error_message]
        } else {
          try {
            const allErrors = err.data.errors
            if (!allErrors) {
              this.errors = err.data
            }
            for (const error in allErrors) {
              this.fieldErrors[error] = allErrors[error]?.join(', ')
              this.errors = [...this.errors, ...allErrors[error]]
            }
          } catch {
            this.errors = [this.cmsData.error_message]
          }
        }
      } finally {
        this.saving = false
      }
    },

    validate() {
      this.errors = []
      this.fieldErrors = {}

      this.$v.$touch()

      if (this.$v.$invalid) {
        if (this.$v.form.name.$error) {
          this.fieldErrors.name = this.cmsData.name_input_error
        }

        if (this.$v.form.email.$error) {
          this.fieldErrors.email = this.cmsData.email_input_error
        }
      }

      return !this.$v.$invalid
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  background: $green;
  padding: 1.5em 2em;
  color: $white;
  @include touch {
    margin-top: 1em;
  }
  h2 {
    color: $white;
    margin-bottom: 1em;
  }
  .field {
    margin-bottom: 1.5rem !important;
  }
  label {
    color: $white;
  }
  button {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }
  .button.is-success.is-loading::after {
    border-color: transparent transparent $green $green !important;
  }
  .privacy {
    font-size: 0.9em;
  }
}
.notification {
  padding: 5px 10px;
}
.notification.is-danger {
  background: rgba($red, 0.8);
  border: 1px solid $red;
}
</style>
