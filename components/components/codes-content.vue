<template>
  <div>
    <file-upload v-if="code.toLowerCase() === 'file upload'" />
    <configure-modbus v-if="code.toLowerCase() === 'configure modbus'" />
    <setting-schedule v-if="code.toLowerCase() === 'setting schedule'" />
  </div>
</template>

<script>
import FileUpload from './codes/file-upload.vue'
import ConfigureModbus from './codes/configure-modbus.vue'
import SettingSchedule from './codes/setting-schedule.vue'

export default {
  components: {
    FileUpload,
    ConfigureModbus,
    SettingSchedule,
  },
  props: {
    code: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.code {
  .token.string {
    color: $green;
  }
  .token.number {
    background: transparent;
    color: $blue;
    font-size: inherit;
    height: inherit;
    padding: inherit;
    justify-content: left;
  }
}
pre[class*='language-'] {
  margin-bottom: 0;
}
</style>
