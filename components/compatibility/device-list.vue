<template>
  <div v-if="listData && listData.data">
    <Device
      v-for="(device, index) in listData.data"
      :key="device.model + index"
      :device="device"
      class="device"
      :compatible-text="compatibleText"
      :development-text="developmentText"
    />
    <div v-if="listData.data.length === 0">
      {{ notfoundText }}
    </div>
  </div>
</template>

<script>
import Device from './device.vue'

export default {
  name: 'DeviceList',

  components: {
    Device,
  },

  props: {
    compatibleText: {
      type: String,
      default: '',
    },
    developmentText: {
      type: String,
      default: '',
    },
    notfoundText: {
      type: String,
      default: '',
    },
    listData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
.device {
  padding: 5px;

  &:nth-of-type(even) {
    background: #fafafa;
  }
}
</style>
