<template>
  <!-- prettier-ignore -->
  <codes-highlight>requests.put(
    'https://api.site.com/api/devices/mydev/properties/schedule-zone-1',
    json={
    "payload": [
    [{"hour":  "06", "minute":  "00", "value":  "ON"}, {"hour":  "22", "minute":  "00", "value":  "OFF"}],
    [{"hour":  "06", "minute":  "00", "value":  "ON"}, {"hour":  "22", "minute":  "00", "value":  "OFF"}],
    [{"hour":  "06", "minute":  "00", "value":  "ON"}, {"hour":  "22", "minute":  "00", "value":  "OFF"}],
    [{"hour":  "06", "minute":  "00", "value":  "ON"}, {"hour":  "22", "minute":  "00", "value":  "OFF"}],
    [{"hour":  "06", "minute":  "00", "value":  "ON"}, {"hour":  "22", "minute":  "00", "value":  "OFF"}],
    [{"hour":  "06", "minute":  "00", "value":  "ON"}, {"hour":  "22", "minute":  "00", "value":  "OFF"}],
    [{"hour":  "06", "minute":  "00", "value":  "ON"}, {"hour":  "22", "minute":  "00", "value":  "OFF"}]
    ],
    "payloadType": "SCHEDULING"
    }, auth=auth).json()</codes-highlight>
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
