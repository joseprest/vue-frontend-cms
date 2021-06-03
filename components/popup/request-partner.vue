<template>
  <div>
    <div v-if="!success" class="box">
      <div>
        <h2 class="title has-text-centered">
          {{ cmsData.title_request_partner }}
        </h2>
      </div>

      <form style="margin-top: 15px" @submit.prevent="submit">
        <div class="field">
          <label class="label is-size-7"> {{ cmsData.full_name }}* </label>
          <div class="control">
            <input
              v-model="name"
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
          <label class="label is-size-7"> {{ cmsData.email }}* </label>
          <div class="control">
            <input
              v-model="email"
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
          <label class="label is-size-7"> {{ cmsData.phone }} </label>
          <div class="control">
            <input v-model="telephone" type="tel" class="input is-medium" />
          </div>
        </div>

        <div class="field">
          <label class="label is-size-7"> {{ cmsData.company }}* </label>
          <div class="control">
            <input
              v-model="company"
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
              {{ cmsData.button_request_partner }}
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

    <div v-if="success" class="notification is-success">
      <span>{{ cmsData.success_msg_request_partner }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestPartnerForm',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      name: null,
      email: null,
      telephone: null,
      company: null,
      saving: false,
      success: false,
      errors: [],
      fieldErrors: {},
    }
  },

  methods: {
    async submit() {
      this.$gtm.trackEvent({
        event: 'uaevent',
        category: 'lead generation',
        action: 'become a partner',
        label: 'become a partner',
      })

      this.errors = []

      this.validateForm()
      if (Object.keys(this.fieldErrors).length !== 0) return

      this.saving = true

      try {
        await this.$sendToBack('request-partner', {
          name: this.name,
          email: this.email,
          phone: this.telephone,
          company: this.company,
        })
        this.errors = []
        this.success = true
      } catch (err) {
        if (err.response) {
          for (const error of err.response.data.errors) {
            this.fieldErrors[error.param] = error.msg
          }
        } else {
          this.errors = [
            {
              msg: this.cmsData.error_msg_request_partner,
            },
          ]
        }
      }

      this.saving = false
    },

    validateForm() {
      this.fieldErrors = {}

      if (!this.name || this.name.trim() === '') {
        this.fieldErrors.name = this.cmsData.error_name
      }

      if (!this.$isEmailValid(this.email)) {
        this.fieldErrors.email = this.cmsData.error_email
      }

      if (!this.company || this.company.trim() === '') {
        this.fieldErrors.company = this.cmsData.error_company
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
