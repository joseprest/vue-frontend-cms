<template>
  <div class="field">
    <div class="control">
      <input
        type="text"
        class="input is-medium"
        :value="content"
        :placeholder="searchPlaceholder"
        @input="changedValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',

  props: {
    searchPlaceholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, null],
      default: '',
    },
  },

  data() {
    return {
      content: this.value,
    }
  },

  watch: {
    value(_new) {
      this.content = _new
    },
  },

  methods: {
    changedValue(e) {
      this.content = e.target.value
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style scoped lang="scss"></style>
