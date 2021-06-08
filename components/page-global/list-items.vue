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
            <ws-link
              v-if="item.button"
              :key="`cta_btn_list_item_${item.button.id}`"
              :cms-data="item.button"
              class="mt-25"
            />
            <!-- TOOO add another ws-link component with v-if, for popup/gotolink -->
            <!-- <ws-link v-if="item.button" :link="item.button.url" class="mt-25"> -->
            <!--              @click.native="requestDemo('box')"-->
            <!-- {{ item.button.title }} -->
            <!-- </ws-link> -->
          </ws-list-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageGlobalListItems',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
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
