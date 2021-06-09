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
          {{ cmsData.name_input_error }}
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
          {{ cmsData.email_input_error }}
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
export default {
  name: 'LorawanBacnetGatewayForm',

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
    submit() {
      this.errors = []
      this.fieldErrors = {}
      this.validateForm()
      if (Object.keys(this.fieldErrors).length > 0) return

      this.saving = true

      try {
        // await BackEndServices.requestGateway({
        // 	name: this.name,
        // 	email: this.email,
        // 	lang: i18n.locale
        // });
        this.successSubmitForm = true

        window.open(this.cmsData.file.url, '_blank')

        // this.$gtm.trackEvent({
        // 	event: "uaevent",
        // 	category: "landing gateway",
        // 	action: "download leaflet",
        // 	label: "download leaflet"
        // });
      } catch (err) {
        this.errors = [this.cmsData.error_message]
        // if (
        // 	err.response &&
        // 	err.response.data !== "failed_sending_mail_request_gateway"
        // ) {
        // 	for (let error of err.response.data.errors) {
        // 		this.fieldErrors[error.param] = error.msg;
        // 	}
        // } else {
        // 	this.errors = [
        // 		{
        // 			msg:
        // 				"We had a problem with your request. Please, send us a message to contact@wattsense.com."
        // 		}
        // 	];
        // }
      } finally {
        this.saving = false
      }
    },

    validateForm() {
      this.fieldErrors = {}

      if (!this.form.name || this.form.name.trim() === '') {
        this.fieldErrors.name = 'invalid'
      }

      if (!this.$isEmailValid(this.form.email?.trim())) {
        this.fieldErrors.email = 'invalid'
      }
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
