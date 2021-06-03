<template>
  <div>
    <div v-if="!success" class="box">
      <div>
        <h2 class="title has-text-centered">
          {{ cmsData.title_request_sales }}
        </h2>
        <p class="subtitle">{{ cmsData.subtitle_request_sales }}</p>
      </div>

      <form style="margin-top: 15px" @submit.prevent="submit">
        <div class="field">
          <label class="label is-size-7"> {{ cmsData.full_name }}* </label>
          <div class="control">
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
          <label class="label is-size-7"> {{ cmsData.email }}* </label>
          <div class="control">
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
          <label class="label is-size-7"> {{ cmsData.phone }}* </label>
          <div class="control">
            <input v-model="phone" type="tel" class="input is-medium" />
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
          <label class="label is-size-7"> {{ cmsData.country }}* </label>
          <div class="control has-icons-left">
            <div class="select is-medium">
              <select v-model="selected_country">
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
          <label class="label is-size-7"> {{ cmsData.project }}* </label>
          <div class="control">
            <textarea
              v-model="project"
              class="textarea"
              required
              :class="{ 'is-danger': fieldErrors.project }"
            />
          </div>
          <p v-if="fieldErrors.project" class="help is-danger">
            {{ fieldErrors.project }}
          </p>
        </div>

        <div class="field">
          <label class="label is-size-7"> {{ cmsData.comments }}* </label>
          <div class="control">
            <input v-model="comments" type="text" class="input is-medium" />
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
              {{ cmsData.button_request_sales }}
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
      <span>{{ cmsData.success_msg_request_sales }}</span>
    </div>
  </div>
</template>

<script>
import listCountries from '@/components/helpers/countries.json'

export default {
  name: 'RequestSalesForm',
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
      phone: null,
      comments: null,
      company: null,
      project: null,
      saving: false,
      success: false,
      errors: [],
      fieldErrors: {},
      countries: listCountries,
      selected_country: 'France',
    }
  },

  computed: {
    listOfCountries() {
      return this.countries
    },
  },

  methods: {
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
        await this.$sendToBack({
          name: this.name,
          email: this.email,
          phone: this.phone,
          company: this.company,
          selected_country: this.selected_country,
          project: this.project,
          comments: this.comments,
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
              msg: this.$t('request-sales.error'),
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

      if (!this.project || this.project.trim() === '') {
        this.fieldErrors.project = this.cmsData.error_project
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
