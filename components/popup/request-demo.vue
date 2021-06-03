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
            <input
              v-model="form.telephone"
              type="tel"
              class="input is-medium"
            />
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
        <div v-if="errors.length > 0" class="content">
          <ul>
            <li v-for="(error, key) in errors" :key="key">
              {{ error.msg }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestDemoForm',

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
        telephone: null,
        company: null,
        product: null,
      },
      saving: false,
      success: false,
      errors: [],
      fieldErrors: {},
    }
  },

  created() {
    this.form.product = this.product
  },

  methods: {
    async submit() {
      this.$gtm.trackEvent({
        event: 'uaevent',
        category: 'lead generation',
        action: 'get a demo',
        label: 'get a demo',
      })

      this.errors = []

      this.validateForm()
      if (Object.keys(this.fieldErrors).length !== 0) return

      this.saving = true

      try {
        await this.$sendToBack('request-demo', this.form)

        this.success = true
      } catch (err) {
        if (err.response) {
          for (const error of err.response.data.errors) {
            this.fieldErrors[error.param] = error.msg
          }
        } else {
          this.errors = [
            {
              msg: this.$t('request-demo.error'),
            },
          ]
        }
      }

      this.saving = false
    },

    validateForm() {
      this.fieldErrors = {}

      if (!this.form.name || this.form.name.trim() === '') {
        this.fieldErrors.name = this.cmsData.error_name
      }
      if (!this.$isEmailValid(this.form.email)) {
        this.fieldErrors.email = this.cmsData.error_email
      }

      if (!this.form.company || this.form.company.trim() === '') {
        this.fieldErrors.company = this.cmsData.error_company
      }
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
