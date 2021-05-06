<template>
  <div class="menu-small">
    <div class="menu-title">
      {{ cmsData.title_examples }}
    </div>
    <div class="menu-content">
      <div class="buttons">
        <div
          v-for="btn in cmsData.buttons"
          :key="`btn-${btn.id}`"
          class="button is-small is-success is-inverted has-text-weight-semibold has-shadow btn-big is-uppercase"
          :class="{ active: btn.text === active }"
          @click="selectCode(btn.text)"
        >
          {{ btn.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
    active: {
      type: String,
      default: '',
    },
  },

  data() {
    return {}
  },

  methods: {
    selectCode(code) {
      this.$emit('select-code', code)
    },
  },
}
</script>

<style lang="scss">
.menu-small {
  margin-bottom: 1rem;
  .menu-title {
    display: flex;
    align-items: center;
    justify-content: left;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .menu-content {
    .button.active {
      color: $white;
      background: $green;
    }
    .buttons .button {
      min-width: auto;
      padding: 1rem;
    }
  }
}
</style>
