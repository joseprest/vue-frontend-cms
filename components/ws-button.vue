<template>
  <div>
    <button
      class="button is-success has-text-weight-semibold has-shadow btn-big is-uppercase"
      :class="{ 'is-inverted': isInverted, 'is-small': isSmall }"
      @click="$emit('click')"
      v-if="!url"
    >
      <slot>
        {{ title }}
      </slot>
    </button>
    <template v-else>
      <a
        v-if="RegExp('^https?://|^//').test(url)"
        :href="url"
        :title="title"
        class="button is-success has-text-weight-semibold has-shadow btn-big is-uppercase"
        :class="{ 'is-inverted': isInverted }"
        target="_blank"
        noref="noref"
        rel="noopener"
      >
        <slot>
          {{ title }}
        </slot>
      </a>
      <nuxt-link
        v-else
        :to="url"
        :title="title"
        :target="target"
        class="button is-success has-text-weight-semibold has-shadow btn-big is-uppercase"
        :class="{ 'is-inverted': isInverted }"
      >
        <slot>
          {{ title }}
        </slot>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'WsButton',

  props: {
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
    isInverted: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
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
