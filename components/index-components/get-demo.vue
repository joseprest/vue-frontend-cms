<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column is-12">
        <p class="buttons">
          <a
            v-if="cmsData !== null"
            class="button is-success has-text-weight-semibold has-shadow btn-big is-uppercase"
          >
            <!-- @click="requestDemo('box')" -->
            {{ cmsData.button_text }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { EventBus } from "@/event-bus";

export default {
  name: 'IndexGetDemo',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  methods: {
    // requestDemo(product) {
    // 	this.$gtm.trackEvent({
    // 		event: "uaevent",
    // 		category: "navigation",
    // 		action: "get a demo",
    // 		label: "body"
    // 	});
    // 	EventBus.$emit("openRequestDemo", product);
    // }
  },
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    @include mobile {
      width: 100%;
    }
  }
}
</style>
