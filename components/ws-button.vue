<template>
  <div>
    <template v-if="cmsData.popup">
      <button
        class="button is-success has-text-weight-semibold has-shadow btn-big is-uppercase"
        :class="{ 'is-inverted': cmsData.inverted, 'is-small': isSmall }"
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
        v-if="RegExp('^https?://|^//').test(cmsData.url)"
        :href="cmsData.file ? cmsData.file.url : cmsData.url"
        :title="cmsData.title"
        class="button is-success has-text-weight-semibold has-shadow btn-big is-uppercase"
        :class="{ 'is-inverted': cmsData.inverted }"
        :target="cmsData.open_new_tab ? '_blank' : ''"
        noref="noref"
        rel="noopener"
      >
        <slot>
          {{ cmsData.title }}
        </slot>
      </a>
      <nuxt-link
        v-else
        :to="localePath(cmsData.url)"
        :title="cmsData.title"
        :target="cmsData.open_new_tab ? '_blank' : ''"
        class="button is-success has-text-weight-semibold has-shadow btn-big is-uppercase"
        :class="{ 'is-inverted': cmsData.inverted }"
      >
        <slot>
          {{ cmsData.title }}
        </slot>
      </nuxt-link>
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

  data: () => ({
    showPopup: false,
  }),
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
