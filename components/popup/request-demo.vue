<template>
  <div>
    <div v-if="!success" class="box">
      <div>
        <h2 class="title has-text-centered">{{ cmsData.title_get_demo }}</h2>
      </div>

      <form style="margin-top: 20px" @submit.prevent="submit">
        <div class="field">
          <label class="label is-size-7"> {{ cmsData.full_name }}* </label>
          <div class="control">
            <input
              v-model="form.name"
              type="text"
              class="input is-medium"
              :class="{ 'is-danger': fieldErrors.name }"
              required
            />
          </div>
          <p v-if="fieldErrors.name" class="help is-danger">
            {{ fieldErrors.name }}
          </p>
        </div>

        <div class="field">
          <label class="label is-size-7">{{ cmsData.email }}*</label>
          <div class="control">
            <input
              v-model="form.email"
              type="email"
              class="input is-medium"
              :class="{ 'is-danger': fieldErrors.email }"
              required
            />
          </div>
          <p v-if="fieldErrors.email" class="help is-danger">
            {{ fieldErrors.email }}
          </p>
        </div>

        <div class="field">
          <label class="label is-size-7">{{ cmsData.phone }}</label>
          <div class="control">
            <input v-model="form.phone" type="tel" class="input is-medium" />
          </div>
        </div>

        <div class="field">
          <label class="label is-size-7">{{ cmsData.company }}*</label>
          <div class="control">
            <input
              v-model="form.company"
              type="text"
              class="input is-medium"
              :class="{ 'is-danger': fieldErrors.company }"
              required
            />
          </div>
          <p v-if="fieldErrors.company" class="help is-danger">
            {{ fieldErrors.company }}
          </p>
        </div>

        <div class="field">
          <div class="control has-text-centered">
            <button
              type="submit"
              class="button is-success has-text-weight-semibold mt-10"
              :class="{ 'is-loading': saving }"
              :disabled="saving"
            >
              {{ cmsData.button_get_demo }}
            </button>
          </div>
        </div>
      </form>

      <div v-if="errors.length > 0" class="notification is-danger mt-15">
        <div class="content">
          <ul>
            <li v-for="(error, index) in errors" :key="`error_${index}`">
              {{ error }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="notification is-success">
      {{ cmsData.success_msg_request_pricing }}
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
// eslint-disable-next-line import/extensions
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'RequestDemoForm',

  mixins: [validationMixin],

  validations: {
    form: {
      name: { required },
      email: { required, email },
      company: {},
      phone: {},
    },
  },

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
    product: {
      type: String,
      default: 'box',
    },
  },

  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        company: null,
        product: this.product,
      },
      saving: false,
      success: false,
      errors: [],
      fieldErrors: {},
    }
  },

  methods: {
    async submit() {
      if (!this.validate()) return false

      this.$gtm.push({
        event: 'uaevent',
        category: 'lead generation',
        action: 'get a demo',
        label: 'get a demo',
      })

      try {
        this.saving = true
        if (!this.form.product) {
          this.form.product = 'box'
        }
        this.form.lang = this.$i18n.locale
        await this.$sendFormToBackend('requestDemo', this.form)

        this.success = true
      } catch (err) {
        try {
          if (err.status === 500) {
            this.errors = [this.cmsData.error_message]
          } else {
            const allErrors = err.data.errors
            if (!allErrors) {
              this.errors = err.data
            }
            for (const error in allErrors) {
              this.fieldErrors[error] = allErrors[error]?.join(', ')
              this.errors = [...this.errors, ...allErrors[error]]
            }
          }
        } catch (error) {
          this.errors = [this.cmsData.error_msg_request_partner]
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
          this.fieldErrors.name = this.cmsData.error_name
        }

        if (this.$v.form.email.$error) {
          this.fieldErrors.email = this.cmsData.error_email
        }

        if (this.$v.form.company.$error) {
          this.fieldErrors.company = this.cmsData.error_company
        }
      }

      return !this.$v.$invalid
    },
  },
}
</script>

<style lang="scss" scoped>
@include desktop {
  .modal-content {
    max-height: calc(100vh - 100px);
  }
}
</style>
