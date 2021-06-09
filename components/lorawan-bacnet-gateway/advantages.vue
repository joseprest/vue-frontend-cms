<template>
  <ul v-if="cmsData" class="list-item">
    <ws-list-item
      v-for="advantage in cmsData.advantage"
      :key="`advantage_${advantage.id}`"
      check-type="check"
    >
      <div class="title has-text-weight-semibold">
        {{ advantage.title }}
      </div>
      <div v-html="$md.render(advantage.content)" />
    </ws-list-item>
  </ul>
</template>

<script>
export default {
  name: 'LorawanBacnetGatewayAdvantages',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.list-item {
  margin-top: 3em;
  li {
    font-weight: 600;
    margin-bottom: 2em;
    div {
      font-weight: normal;
      font-size: 0.9em;
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
