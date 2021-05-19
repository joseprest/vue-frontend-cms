<template>
  <nav class="pagination is-small" role="navigation" aria-label="pagination">
    <a
      v-if="page > 1"
      :href="`?page=${page - 1}`"
      class="pagination-previous"
      @click.prevent="previousPage"
      >&larr;</a
    >
    <button
      v-else
      type="button"
      class="pagination-previous"
      disabled="disabled"
    >
      &larr;
    </button>
    <a
      v-if="page < lastPage"
      :href="`?page=${page + 1}`"
      class="pagination-next"
      :disabled="page === lastPage"
      @click.prevent="nextPage"
      >&rarr;</a
    >
    <button v-else type="button" class="pagination-next" disabled="disabled">
      &rarr;
    </button>

    <ul class="pagination-list">
      <template v-for="index in lastPage">
        <!-- if there's more pages than 7, use ellipses to skip a few of them -->
        <li v-if="needPage(page, index, lastPage) === true" :key="index">
          <a
            :href="`?page=${index}`"
            :class="
              page === index ? 'pagination-link is-current' : 'pagination-link'
            "
            :aria-label="`Goto page ${index}`"
            @click.prevent="() => changedPage(index)"
            >{{ index }}</a
          >
        </li>
        <li v-else-if="index === 2 || index === lastPage - 1" :key="index">
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    value: {
      type: Number,
      default: 1,
    },
    lastPage: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      page: 1,
    }
  },

  mounted() {
    this.page = this.value
  },

  updated() {
    if (this.page !== this.value) this.page = this.value
  },

  methods: {
    changedPage(newPage) {
      if (this.page !== newPage) {
        this.page = newPage
        this.$emit('input', newPage)
      }
    },
    nextPage() {
      if (this.page < this.lastPage) this.changedPage(this.page + 1)
    },
    previousPage() {
      if (this.page > 1) this.changedPage(this.page - 1)
    },
    needPage(page, index, lastPage) {
      // Always show first, last pages; show all if there're less than 7 pages in total.
      // Otherwise, show the first few, last few and a few around the current one
      if (index === 1 || index === lastPage || lastPage < 7) return true
      else
        return (
          (page < 5 && index < 5) ||
          (page > lastPage - 4 && index > lastPage - 4) ||
          (index > page - 2 && index < page + 2)
        )
    },
  },
}
</script>

<style scoped lang="scss">
button {
  background: transparent;
  cursor: pointer;
}
</style>
