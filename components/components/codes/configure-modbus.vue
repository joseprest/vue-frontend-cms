<template>
  <!-- prettier-ignore -->
  <codes-highlight>requests.post(
    'https://api.site.com/api/devices/mydev/configs/draft/properties',
    json = {
    'name': 'Navipass Weekly Schedule',
    'slug': 'schedule-zone-1',
    'schedulingEncoderId': 'atlantic_navipass_weekly',
    'equipmentId': 'my-navipass-equipment',
    'accessType': 'REMOTE_WRITE_ONLY',
    'config': {
    'protocol': 'MODBUS_IP',
    'modbusFunction': 'WRITE_MULTIPLE_REGISTERS',
    'modbusRegisterAddress': 320,
    'modbusDataFormat': 'raw_bytes',
    'modbusNumberOfRawRegisters': 42
    }
    }, auth = auth).json()</codes-highlight>
</template>

<script>
import { component as CodesHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/duotone-sea.css'

export default {
  components: {
    CodesHighlight,
  },
}
</script>
