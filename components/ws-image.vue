<template>
  <div>
    <img
      v-lazy-load
      v-bind="$attrs"
      :data-src="src"
      :src-placeholder="placeholder"
      :alt="alt"
    />
    {{ $attrs }}
  </div>
</template>

<script>
export default {
  name: 'WsImage',
  props: {
    src: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: require('~/assets/imgs/empty.gif'),
    },
  },
}
</script>
