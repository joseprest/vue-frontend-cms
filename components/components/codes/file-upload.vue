<template>
  <!-- prettier-ignore -->
  <codes-highlight>resource = requests.post(
    'https://api.site.com/api/fileResources',
    data = {
    'fileResourceType': 'PLUGIN',
    'level': 'ORGANIZATION',
    'name': 'plugin',
    'organizationId': '56ffe78j-370b-4b4f-a199-d2cfd4a09af8'
    }, files = {
    'file': open('plugin.py', 'r').read()
    }, auth = auth
    ).json()</codes-highlight>
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
