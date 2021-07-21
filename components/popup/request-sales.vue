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
              <select v-model="country">
                <option v-for="coun of listOfCountries" :key="coun.code">
                  {{ coun.name }}
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
      <span>{{ cmsData.success_msg_request_sales }}</span>
    </div>
  </div>
</template>

<script>
import LIST_COUNTRIES from '@/components/helpers/countries.json'
import { validationMixin } from 'vuelidate'
// eslint-disable-next-line import/extensions
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'RequestSalesForm',

  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    company: {},
    phone: {},
    country: {},
    project: { required },
    comments: {},
  },

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
      country: 'France',
    }
  },

  computed: {
    listOfCountries() {
      return LIST_COUNTRIES
    },
  },

  methods: {
    async submit() {
      if (!this.validate()) return false

      this.$gtm.push({
        event: 'uaevent',
        category: 'lead generation',
        action: 'contact sales',
        label: 'contact sales',
      })

      try {
        this.saving = true
        await this.$sendFormToBackend('requestSales', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          company: this.company,
          country: this.country,
          project: this.project,
          comments: this.comments,
        })
        this.errors = []
        this.success = true
      } catch (err) {
        try {
          if (err.status === 500) {
            this.errors = [this.cmsData.error_msg_request_sales]
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
          this.errors = [this.cmsData.error_msg_request_sales]
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
        if (this.$v.name.$error) {
          this.fieldErrors.name = this.cmsData.error_name
        }

        if (this.$v.email.$error) {
          this.fieldErrors.email = this.cmsData.error_email
        }

        if (this.$v.company.$error) {
          this.fieldErrors.company = this.cmsData.error_company
        }

        if (this.$v.project.$error) {
          this.fieldErrors.project = this.cmsData.error_project
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
