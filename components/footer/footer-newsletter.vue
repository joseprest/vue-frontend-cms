<template>
  <div class="newsletter">
    <p>{{ $t('cta-newsletter.title') }}</p>
    <div class="field">
      <div id="input" class="control">
        <input
          v-model="email"
          class="input no-border"
          type="email"
          :placeholder="$t('cta-newsletter.email')"
        />
      </div>
      <div id="button" class="control">
        <button
          class="button is-success inverted no-border"
          :class="{ 'is-loading': sending }"
          :disabled="sending"
          @click="send"
        >
          {{ $t('cta-newsletter.button') }}
        </button>
      </div>
    </div>

    <transition name="fade">
      <div v-show="error && !success">
        <p class="notification help is-danger">{{ errorMsg }}</p>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="!error && success" class="notification is-success">
        {{ $t('cta-newsletter.success') }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FooterNewsletter',
  props: {
    cmsData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      email: null,
      sending: false,
      success: false,
      error: null,
      errorMsg: 'Ops! Inform a valid e-mail address!',
    }
  },
  methods: {
    send() {
      this.error = null
      this.sending = true
      this.success = false
      this.errorMsg = 'Ops! Inform a valid e-mail address!'

      // this.$gtm.trackEvent({
      //   event: 'uaevent',
      //   category: 'lead generation',
      //   action: 'subscribe to the newsletter',
      //   label: 'body',
      // })

      // try {
      //   await BackEndServices.subscribeToNewsletter(this.email)
      //   this.error = null
      //   this.success = true
      // } catch (err) {
      //   if (typeof err === 'string') {
      //     this.errorMsg = err
      //     this.error = true
      //   } else if (err.response) {
      //     if (err.response.status !== 400) {
      //       this.errorMsg =
      //         'Ops! Something went wrong with our server! Send us a message to contact@wattsense.com, please!'
      //       this.error = true
      //     } else this.success = true
      //   } else {
      //     this.errorMsg =
      //       'Ops! Something went wrong... Check if your e-mail is valid, please!'
      //     this.error = true
      //   }
      // }

      this.sending = false
    },
  },
}
</script>

<style lang="scss" scoped>
.newsletter {
  margin-top: 10px;
  .button.is-success {
    background: transparent;
    color: $white;
    border: 1px solid rgba($white, 0.5);
    width: 100%;
    &:hover {
      color: $blue-dark;
    }
  }
  .notification {
    font-size: 0.75rem;
    line-height: 1.1rem !important;
    padding: 10px 0;
    margin-top: -0.5rem;
    border: 0;
  }
  .notification.is-danger {
    background: $green;
    color: #c43e2b;
  }
  p {
    line-height: 1em !important;
    margin-bottom: 1em;
  }
  .field {
    max-width: 350px;
  }
  @include touch {
    .has-addons {
      display: flex !important;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
