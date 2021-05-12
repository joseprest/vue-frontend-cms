<template>
  <div class="story-table is-inline-flex">
    <div class="table">
      <div class="title">
        <strong>{{ cmsData.title }}</strong>
      </div>
      <div class="content">
        <table>
          <thead v-if="thead">
            <tr v-for="row in thead" :key="`thead-row-${row.id}`">
              <th v-for="col in row.column" :key="`thead-col-${col.id}`">
                {{ col.text }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tbody" :key="`tbody-row-${row.id}`">
              <td v-for="col in row.column" :key="`tbody-col-${col.id}`">
                {{ col.text }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="legend">{{ cmsData.legend }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryTable',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  computed: {
    thead() {
      if (this.cmsData && this.cmsData.row.length > 0) {
        return this.cmsData.row.filter((row) => row.titles_row)
      }
      return null
    },
    tbody() {
      if (this.cmsData && this.cmsData.row.length > 0) {
        return this.cmsData.row.filter((row) => !row.titles_row)
      }
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.story-table {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;

  .table {
    background-color: rgba(#dbdbdb, 0.15);
    width: 100%;
    padding-top: 2rem;
    .title {
      font-weight: bold;
      font-size: 1.2em;
      color: $green;
      text-align: center;
    }
    .content {
      width: 100%;
      overflow-x: auto;
      table {
        width: 100%;
      }
    }
    .legend {
      font-style: italic;
      font-size: 0.8em;
      text-align: center;
      border-top: 1px dotted #dbdbdb;
      opacity: 0.8;
    }
  }
}
</style>

<style lang="scss">
table.setemi {
  th {
    width: 33%;
  }
}
</style>
