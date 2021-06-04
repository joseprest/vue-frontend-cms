<template>
  <ul class="mt-30">
    <li v-if="cmsData">
      <a
        class="login"
        :href="cmsData.link.link"
        :target="cmsData.open_new_tab ? '_blank' : ''"
        noref="noref"
        rel="noopener"
      >
        <span>{{ cmsData.link.text }}</span>
        <span class="icon">
          <ico-arrow />
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
import IcoArrow from '@/assets/imgs/icons/link-arrow-white.svg?inline'

export default {
  name: 'FooterLogin',
  components: {
    IcoArrow,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
a.login {
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  background: rgba($white, 0.2);
  padding: 5px 15px;
  transition: all linear 0.02s;
  margin-right: 1rem;
  font-size: 0.9em;
  line-height: 1.2em;
  &:hover {
    .icon {
      svg {
        fill: $dark;
        stroke: $dark;
      }
    }
  }
  span {
    display: inline-flex;
    align-items: center;
    font-weight: 500;
  }
  .icon {
    margin-left: 10px;
    width: 12px;
    svg {
      width: 12px;
      height: auto;
      fill: $white;
      stroke: $white;
      stroke-width: 0.5px;
    }
  }
}
</style>
