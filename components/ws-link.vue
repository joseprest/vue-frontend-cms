<template>
  <div>
    <a
      v-if="RegExp('^https?://|^//').test(url)"
      :href="url"
      :title="title"
      :class="{
        inverted: isInverted,
        small: isSmall,
        transparent: isTransparent,
        halftransparent: isHalftransparent,
      }"
      target="_blank"
      noref="noref"
      rel="noopener"
      @click.native="action"
    >
      <slot>
        {{ title }}
      </slot>
      <span class="icon">
        <ico-arrow />
      </span>
    </a>
    <nuxt-link
      v-else
      :to="url"
      :title="title"
      :target="target"
      :class="{
        inverted: isInverted,
        small: isSmall,
        transparent: isTransparent,
        halftransparent: isHalftransparent,
      }"
      @click.native="action"
    >
      <slot>
        {{ title }}
      </slot>
      <span class="icon">
        <ico-arrow />
      </span>
    </nuxt-link>
  </div>
</template>

<script>
import IcoArrow from '~/assets/imgs/icons/link-arrow.svg?inline'

export default {
  components: {
    IcoArrow,
  },
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
    action: {
      type: Function,
      default: () => {},
    },
    isInverted: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    isTransparent: {
      type: Boolean,
      default: false,
    },
    isHalftransparent: {
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
  color: $green;
  font-weight: 600;
}

a {
  background-color: rgba($blue-dark, 0.05);
  border-radius: 5px;
  padding: 3px 15px;
  transition: all linear 0.08s;
  font-size: 1rem;
  &:hover {
    background-color: rgba($blue-dark, 0.07);
  }
  @include mobile {
    font-size: 1.15rem;
  }
}

a.inverted {
  background-color: rgba($white, 0.08);
  &:hover {
    background-color: rgba($white, 0.1);
  }
}

a.small {
  font-size: 0.85rem;
  @include mobile {
    font-size: 1.1rem;
  }
}

a.transparent {
  background-color: transparent;
  &:hover {
    background-color: rgba($blue-dark, 0.04);
  }
}

a.halftransparent {
  background-color: rgba($blue-dark, 0.03);
  &:hover {
    background-color: rgba($blue-dark, 0.05);
  }
}

.icon {
  margin-left: 10px;
  width: 12px;
  svg {
    width: 12px;
    height: auto;
  }
}
</style>
