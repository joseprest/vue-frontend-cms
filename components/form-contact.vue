<template>
  <div>
    <form v-if="!success">
      <div class="field">
        <div class="control">
          <label class="label is-size-7">{{ cmsData.label_name }}*</label>
          <input
            v-model="name"
            type="text"
            class="input is-medium"
            required
            :class="{ 'is-danger': fieldErrors.name }"
          />
        </div>
        <p v-if="fieldErrors.name" class="help is-danger">
          {{ fieldErrors.name }}
        </p>
      </div>

      <div class="field">
        <div class="control">
          <label class="label is-size-7">{{ cmsData.label_email }}*</label>
          <input
            v-model="email"
            type="email"
            class="input is-medium"
            required
            :class="{ 'is-danger': fieldErrors.email }"
          />
        </div>
        <p v-if="fieldErrors.email" class="help is-danger">
          {{ fieldErrors.email }}
        </p>
      </div>

      <div class="field">
        <div class="control">
          <label class="label is-size-7">{{ cmsData.label_company }}*</label>
          <input
            v-model="company"
            type="text"
            class="input is-medium"
            required
            :class="{ 'is-danger': fieldErrors.company }"
          />
        </div>
        <p v-if="fieldErrors.company" class="help is-danger">
          {{ fieldErrors.company }}
        </p>
      </div>

      <div class="field">
        <div class="control">
          <label class="label is-size-7">{{ cmsData.label_message }}*</label>
          <textarea
            v-model="message"
            cols="30"
            rows="10"
            class="textarea"
            :class="{ 'is-danger': fieldErrors.message }"
          />
        </div>
        <p v-if="fieldErrors.message" class="help is-danger">
          {{ fieldErrors.message }}
        </p>
      </div>

      <div class="field">
        <div class="control">
          <button
            class="button is-success"
            :class="{ 'is-loading': sending }"
            :disabled="sending"
            @click.prevent="send"
          >
            {{ cmsData.form_button_title }}
          </button>
        </div>
      </div>
    </form>
    <div v-else class="notification" :class="{ 'is-success': success }">
      <span>{{ cmsData.success_message }}</span>
    </div>
    <div v-if="errors && errors.length" class="notification is-danger">
      <ul>
        <li v-for="(error, index) in errors" :key="`error_${index}`">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
// eslint-disable-next-line import/extensions
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'FormContact',

  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    company: { required },
    message: { required },
  },

  props: {
    cmsData: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      name: null,
      email: null,
      company: null,
      message: null,
      fieldErrors: {},
      errors: [],
      success: false,
      sending: false,
    }
  },

  methods: {
    async send() {
      if (!this.validate()) return false

      this.$gtm.push({
        event: 'uaevent',
        category: 'lead generation',
        action: 'contact us',
        label: 'body',
      })

      this.sending = true

      try {
        await this.$sendFormToBackend('requestContact', {
          name: this.name,
          email: this.email,
          company: this.company,
          message: this.message,
        })
        this.errors = []
        this.success = true
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
        this.sending = false
      }
    },

    validate() {
      this.errors = []
      this.fieldErrors = {}

      this.$v.$touch()

      if (this.$v.$invalid) {
        if (this.$v.name.$error) {
          this.fieldErrors.name = this.cmsData.error_name
        }

        if (this.$v.email.$error) {
          this.fieldErrors.email = this.cmsData.error_email
        }

        if (this.$v.company.$error) {
          this.fieldErrors.company = this.cmsData.error_company
        }

        if (this.$v.message.$error) {
          this.fieldErrors.message = 'Required'
        }
      }

      return !this.$v.$invalid
    },
  },
}
</script>

<style lang="scss" scoped>
.field {
  padding-top: 1rem;
}
</style>
