<template>
  <div>
    <div class="columns is-multiline">
      <div v-for="item in items" :key="item.id" class="column is-6 is-12-touch">
        <ul class="list-item">
          <ws-list-item check-type="check">
            <div class="title has-text-weight-semibold">
              {{ item.title }}
            </div>
            <div>
              {{ item.text }}
            </div>
            <!-- TOOO add another ws-link component with v-if, for popup/gotolink -->
            <ws-link v-if="item.button" :link="item.button.url" class="mt-25">
              <!--              @click.native="requestDemo('box')"-->
              {{ item.button.title }}
            </ws-link>
          </ws-list-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    requestDemo(product) {
      // TODO demo popup
      this.$gtm.trackEvent({
        event: 'uaevent',
        category: 'navigation',
        action: 'get a demo',
        label: 'benefits Integrators',
      })
    },
  },
}
</script>

<style lang="scss">
.list-item {
  li {
    font-weight: 600;
    div {
      font-weight: normal;
    }
    @include touch {
      a {
        margin-top: 0 !important;
      }
    }
    a.span {
      font-weight: inherit;
      display: inherit;
    }
  }
  .title {
    font-size: 1.35rem;
    margin-bottom: 14px;
  }
  @include touch {
    li.item-list {
      font-size: inherit;
    }
  }
}
</style>
