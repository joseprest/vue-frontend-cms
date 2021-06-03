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
  </div>
</template>

<script>
export default {
  name: 'FormContact',

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

      this.$gtm.trackEvent({
        event: 'uaevent',
        category: 'lead generation',
        action: 'contact us',
        label: 'body',
      })

      this.sending = true

      try {
        await this.$sendToBack('contact', {
          name: this.name,
          email: this.email,
          company: this.company,
          message: this.message,
        })
        this.errors = []
        this.success = true
      } catch (err) {
        if (err.response) {
          if (err.response.status === 500) {
            this.errors = [
              {
                msg: this.cmsData.error_message,
              },
            ]
          } else {
            this.errors = err.response.data.errors
            for (const error of this.errors) {
              this.fieldErrors[error.param] = error.msg
            }
          }
        } else {
          this.errors = [
            {
              msg: this.cmsData.error_message,
            },
          ]
        }
      }

      this.sending = false
    },

    validate() {
      this.errors = []
      this.fieldErrors = {}

      if (this.name === null || this.name.trim().length < 1) {
        this.errors.push({
          param: 'name',
          msg: this.cmsData.error_name,
        })
        this.fieldErrors.name = this.cmsData.error_name
        return false
      }

      if (this.email === null || this.email.trim().length < 1) {
        this.errors.push({
          param: 'email',
          msg: this.cmsData.error_email,
        })
        this.fieldErrors.email = this.cmsData.error_email
        return false
      }

      if (!this.$isEmailValid(this.email)) {
        this.errors.push({
          param: 'email',
          msg: this.cmsData.error_email,
        })
        this.fieldErrors.email = this.cmsData.error_email
        return false
      }

      if (this.company === null || this.company.trim().length < 1) {
        this.errors.push({
          param: 'company',
          msg: this.cmsData.error_company,
        })
        this.fieldErrors.company = this.cmsData.error_company
        return false
      }

      if (this.message === null || this.message.trim().length < 5) {
        this.errors.push({
          param: 'message',
          msg: this.cmsData.error_message,
        })
        this.fieldErrors.message = this.cmsData.error_message
        return false
      }

      return true
    },
  },
}
</script>

<style lang="scss" scoped>
.field {
  padding-top: 1rem;
}
</style>
