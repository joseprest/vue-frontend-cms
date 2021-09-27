<template>
  <span>
    <template v-if="cmsData">
      <template v-if="cmsData.popup">
        <a
          :class="{
            inverted: cmsData.inverted,
            small: isSmall,
            transparent: isTransparent,
            halftransparent: isHalftransparent,
          }"
          @click="showPopup = true"
        >
          <slot>
            {{ cmsData.title }}
          </slot>
          <span v-if="isIcon" class="icon">
            <ico-arrow />
          </span>
        </a>
        <popup-container
          :show="showPopup"
          :popup="cmsData.popup"
          @close="showPopup = false"
        />
      </template>
      <template v-else>
        <a
          v-if="cmsData && cmsData.file"
          :href="$getUrlFromCms(cmsData.file.url)"
          :class="{
            inverted: cmsData.inverted,
            small: isSmall,
            transparent: isTransparent,
            halftransparent: isHalftransparent,
          }"
          :target="cmsData.open_new_tab ? '_blank' : ''"
          noref="noref"
          rel="noopener"
        >
          {{ cmsData.title }}
          <span v-if="isIcon" class="icon">
            <ico-arrow />
          </span>
        </a>
        <nuxt-link
          v-else-if="!$isExternalUrl(cmsData.url)"
          :to="localePath(cmsData.url)"
          :title="cmsData.title"
          :class="{
            inverted: cmsData.inverted,
            small: isSmall,
            transparent: isTransparent,
            halftransparent: isHalftransparent,
          }"
        >
          <slot>
            {{ cmsData.title }}
          </slot>
          <span v-if="isIcon" class="icon">
            <ico-arrow />
          </span>
        </nuxt-link>
        <a
          v-else
          :href="cmsData.url"
          :target="cmsData.open_new_tab ? '_blank' : null"
          :class="{
            inverted: cmsData.inverted,
            small: isSmall,
            transparent: isTransparent,
            halftransparent: isHalftransparent,
          }"
        >
          <slot>
            {{ cmsData.title }}
          </slot>
          <span v-if="isIcon" class="icon">
            <ico-arrow />
          </span>
        </a>
      </template>
    </template>
    <template v-else>
      <a
        v-if="$isExternalUrl(url)"
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
        @click="action"
      >
        <slot>{{ title }} </slot>
        <span v-if="isIcon" class="icon">
          <ico-arrow />
        </span>
      </a>
      <nuxt-link
        v-else
        :to="localePath(url)"
        :title="title"
        :target="target"
        :class="{
          inverted: isInverted,
          small: isSmall,
          transparent: isTransparent,
          decoration: isDecoration,
          halftransparent: isHalftransparent,
        }"
        @click.native="action"
      >
        <slot>
          {{ title }}
        </slot>
        <span v-if="isIcon" class="icon">
          <ico-arrow />
        </span>
      </nuxt-link>
    </template>
  </span>
</template>

<script>
import PopupContainer from '@/components/popup/popup-container.vue'
import IcoArrow from '~/assets/imgs/icons/link-arrow.svg?inline'

export default {
  name: 'WsLink',

  components: {
    PopupContainer,
    IcoArrow,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
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
    isDecoration: {
      type: Boolean,
      default: false,
    },
    isHalftransparent: {
      type: Boolean,
      default: false,
    },
    isIcon: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      showPopup: false,
    }
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
a.decoration {
  text-decoration: underline;
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
