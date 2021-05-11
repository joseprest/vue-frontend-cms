<template>
  <div>
    <ws-paragraph>
      <ws-title :title="cmsData.title" />
    </ws-paragraph>
    <div class="columns is-multiline is-mobile" style="margin-top: 2em">
      <div
        v-for="member in cmsData.members"
        :key="`member-${member.id}`"
        class="column is-6-mobile is-4-tablet is-3-desktop is-3-widescreen"
      >
        <user :user="member" />
      </div>
    </div>
  </div>
</template>

<script>
import User from './user.vue'
export default {
  name: 'People',
  components: {
    User,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
