<template>
  <section class="section newbms">
    <div class="container">
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
  </section>
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
.section.newbms {
  background: rgba($blue-dark, 0.05);
  padding-top: 1rem;
  padding-bottom: 6rem;
  @include touch {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
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
