<template>
  <div>
    <template v-if="cmsData.popup">
      <button
        class="button is-success has-text-weight-semibold has-shadow btn-big is-uppercase"
        :class="{
          'is-inverted': cmsData.inverted,
          'is-small': isSmall,
          'is-hidden': cmsData.forceForm,
        }"
        @click="showPopup = true"
      >
        <slot>
          {{ cmsData.title }}
        </slot>
      </button>
      <popup-container
        :show="showPopup"
        :popup="cmsData.popup"
        @close="showPopup = false"
      />
    </template>
    <template v-else>
      <a
        v-if="cmsData.file"
        :href="$getUrlFromCms(cmsData.file.url)"
        v-bind="defaultAttrs"
        noref="noref"
        rel="noopener"
      >
        <slot>
          {{ cmsData.title }}
        </slot>
      </a>
      <a
        v-else-if="
          cmsData.url &&
          (cmsData.url[0] !== '#' ||
            $isExternalUrl(cmsData.url) ||
            cmsData.url.indexOf('mailto') !== -1)
        "
        :href="cmsData.url"
        v-bind="defaultAttrs"
        noref="noref"
        rel="noopener"
      >
        <slot>
          {{ cmsData.title }}
        </slot>
      </a>
      <nuxt-link
        v-else-if="cmsData.url"
        :to="cmsData.url[0] === '#' ? cmsData.url : localePath(cmsData.url)"
        v-bind="defaultAttrs"
      >
        <slot>
          {{ cmsData.title }}
        </slot>
      </nuxt-link>
      <span v-else>
        {{ cmsData }}
      </span>
    </template>
  </div>
</template>

<script>
import PopupContainer from '@/components/popup/popup-container.vue'

export default {
  name: 'WsButton',

  components: {
    PopupContainer,
  },
  props: {
    cmsData: {
      type: Object,
      default: () => ({}),
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showPopup: false,
    }
  },

  computed: {
    defaultAttrs() {
      return {
        title: this.cmsData.title,
        class: this.buttonClass.join(' '),
        target: this.cmsData.open_new_tab ? '_blank' : '',
      }
    },

    buttonClass() {
      const classes = [
        'button',
        'has-text-weight-semibold',
        'has-shadow',
        'is-uppercase',
      ]
      if (this.cmsData.inverted) {
        classes.push('is-inverted')
      }
      if (
        ['green', 'blue', 'dark_blue', 'yellow', 'red'].includes(
          this.cmsData.color
        )
      ) {
        const mapColors = {
          green: 'success',
          blue: 'info',
          dark_blue: 'darker-blue',
          yellow: 'warning',
          red: 'danger',
        }
        classes.push(`is-${mapColors[this.cmsData.color]}`)
      } else {
        classes.push('is-success')
      }

      if (this.isSmall) {
        classes.push('is-small')
      } else if (['small', 'normal', 'big'].includes(this.cmsData.size)) {
        if (this.cmsData.size === 'small') {
          classes.push('is-small')
        } else if (this.cmsData.size === 'big') {
          classes.push('btn-big')
        }
      } else {
        // default of the button, unfortunately (but we can fix that!!!), is to have btn-big class :facepalm:
        classes.push('btn-big')
      }

      return classes
    },
  },

  mounted() {
    this.showPopup = this.cmsData?.forceForm
  },
}
</script>

<style lang="scss" scoped>
a,
span {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
}

// a.inverted {
//   background-color: rgba($white, 0.08);
//   color: $green;
//   &:hover {
//     background-color: rgba($white, 0.1);
//     color: $green;
//   }
// }

// a.inverted.button {
//   background-color: rgba($white, 1);
//   span {
//     color: $green !important;
//   }
// }
</style>
