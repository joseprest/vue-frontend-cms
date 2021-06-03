<template>
  <div>
    <div v-if="!success" class="box">
      <div>
        <h2 class="title has-text-centered">{{ cmsData.title_get_demo }}</h2>
      </div>

      <form style="margin-top: 15px" @submit.prevent="submit">
        <div class="field">
          <label class="label is-size-7"> {{ cmsData.full_name }}* </label>
          <div class="control">
            <input
              v-model="form.name"
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
          <label class="label is-size-7"> {{ cmsData.email }}* </label>
          <div class="control">
            <input
              v-model="form.email"
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
          <label class="label is-size-7"> {{ cmsData.phone }}* </label>
          <div class="control">
            <input v-model="form.phone" type="tel" class="input is-medium" />
          </div>
        </div>

        <div class="field">
          <label class="label is-size-7"> {{ cmsData.company }}* </label>
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
          <label class="label is-size-7"> {{ cmsData.country }}* </label>
          <div class="control has-icons-left">
            <div class="select is-medium">
              <select v-model="form.selected_country">
                <option v-for="country of listOfCountries" :key="country.code">
                  {{ country.name }}
                </option>
              </select>
            </div>
            <div class="icon is-small is-left">
              <figure class="image is-16x16">
                <img src="@/assets/imgs/worlwide-gray.svg" alt="country" />
              </figure>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label is-size-7"> {{ cmsData.comments }}* </label>
          <div class="control">
            <input
              v-model="form.comments"
              type="text"
              class="input is-medium"
            />
          </div>
        </div>

        <div class="field" style="margin-top: 20px">
          <div class="control has-text-centered">
            <button
              type="submit"
              class="button is-success has-text-weight-semibold mt-10"
              :class="{ 'is-loading': saving }"
              :disabled="saving"
            >
              {{ cmsData.button_request_prices }}
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
      <span>{{ cmsData.success_msg_request_pricing }}</span>
    </div>
  </div>
</template>

<script>
import listCountries from '@/components/helpers/countries.json'

export default {
  name: 'RequestPricesForm',
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
        comments: null,
        company: null,
        product: null,
        segment: null,
        selected_country: 'France',
      },
      countries: listCountries,
      saving: false,
      success: false,
      errors: [],
      fieldErrors: {},
    }
  },

  computed: {
    listOfCountries() {
      return this.countries
    },
  },

  methods: {
    close() {
      this.errors = []
      this.success = false
      this.saving = false
      this.fieldErrors = {}
      this.$emit('close')
    },

    async submit() {
      this.$gtm.trackEvent({
        event: 'uaevent',
        category: 'lead generation',
        action: 'question about pricing',
        label: 'question about pricing',
      })

      this.errors = []
      this.validateForm()
      if (Object.keys(this.fieldErrors).length !== 0) return

      this.saving = true

      try {
        await this.$sendToBack('request-prices', this.form)
        this.success = true
      } catch (err) {
        if (err.response) {
          for (const error of err.response.data.errors) {
            this.fieldErrors[error.param] = error.msg
          }
        } else {
          this.errors = [
            {
              msg: this.cmsData.error_msg_request_pricing,
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
        this.fieldErrors.email = this.$t('request-prices.email-error')
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
.subtitle {
  margin-top: 10px !important;
  margin-bottom: 30px;
  opacity: 0.6;
  font-size: 1em;
  font-weight: 600;
  color: $gray-dark;
}
select,
.select {
  width: 100% !important;
  font-size: 1rem;
  height: 2.8rem;
}
.select:not(.is-multiple):not(.is-loading)::after {
  border-color: $green !important;
}
</style>
