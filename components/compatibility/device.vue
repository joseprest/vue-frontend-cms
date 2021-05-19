<template>
  <div class="device">
    <div class="name">
      <span> {{ device.brand }} &#45; {{ device.model }} </span>
      <template v-if="device.protocols">
        <div class="is-size-7 has-text-grey-light is-italic">
          {{ device.protocols.join(', ') }}
        </div>
      </template>
    </div>
    <span v-if="device.verified" class="status has-text-success has-text-right">
      {{ compatibleText }}
    </span>
    <span v-else class="status has-text-grey-light has-text-right">
      {{ developmentText }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Device',
  props: {
    compatibleText: {
      type: String,
      default: '',
    },
    developmentText: {
      type: String,
      default: '',
    },
    device: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped lang="scss">
.device {
  display: flex;
}
.name {
  flex: 1;
}
</style>
