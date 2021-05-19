<template>
  <div class="is-flex">
    <div class="is-size-7">{{ protocolsText }}:</div>
    <div class="columns is-multiline" style="margin-left: 10px">
      <div
        v-for="protocol in availableProtocols"
        :key="protocol.value"
        class="column is-narrow is-size-7"
        style="padding-bottom: 0; padding-right: 0.3rem"
      >
        <label class="checkbox">
          <input
            v-model="selectedProtocols"
            type="checkbox"
            :value="protocol.value"
            @change="changedValue"
          />
          {{ protocol.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    protocolsText: {
      type: String,
      default: '',
    },
    value: {
      type: Array,
      default: () => [],
    },
    availableProtocols: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      selectedProtocols: this.value,
    }
  },

  watch: {
    value(_new) {
      this.selectedProtocols = _new
    },
  },

  methods: {
    changedValue() {
      return this.$emit('input', this.selectedProtocols)
    },
  },
}
</script>

<style></style>
