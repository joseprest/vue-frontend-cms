<template>
  <div class="pb-30">
    <div class="container is-flex-column">
      <button
        class="button is-success is-inverted has-text-weight-bold has-shadow btn-big is-uppercase is-align-self-center"
        @click="showTable = !showTable"
      >
        <span v-html="cmsData.button_text" />
      </button>
    </div>

    <table v-show="showTable" class="table is-fullwidth mt-50">
      <client-only>
        <thead class="is-hidden-mobile">
          <th width="40%" class="features">
            {{ cmsData.captions[0].text }}
          </th>
          <th width="30%" class="has-background-white has-text-centered">
            {{ cmsData.captions[1].text }}
          </th>
          <th wodth="30%" class="has-background-white has-text-centered">
            {{ cmsData.captions[2].text }}
          </th>
        </thead>
      </client-only>
      <tbody>
        <tr v-for="d in cmsData.differences" :key="`difference${d.id}`">
          <td>
            {{ d.title }}
          </td>
          <td class="has-background-white has-text-centered">
            <span class="is-flex align-center">
              <span class="is-hidden-tablet">
                {{ cmsData.captions[1].text }}
              </span>
              <check-icon v-if="d.box && isBox" class="image is-24x24" />
              <check-disable-icon v-else-if="d.box" class="image is-24x24" />
              <line-icon v-else class="image line" />
            </span>
          </td>
          <td class="has-background-white has-text-centered">
            <span class="is-flex align-center">
              <span class="is-hidden-tablet">
                {{ cmsData.captions[2].text }}
              </span>
              <check-icon v-if="d.hub && !isBox" class="image is-24x24" />
              <check-disable-icon v-else-if="d.hub" class="image is-24x24" />
              <line-icon v-else class="image line" />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CheckIcon from '~/assets/imgs/check.svg?inline'
import CheckDisableIcon from '~/assets/imgs/check-disable.svg?inline'
import LineIcon from '~/assets/imgs/line.svg?inline'

export default {
  components: {
    CheckIcon,
    CheckDisableIcon,
    LineIcon,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      showTable: false,
    }
  },
  computed: {
    isBox() {
      return this.$route.path.includes('/box')
    },
  },
}
</script>

<style lang="scss" scoped>
.differences {
  padding-top: 6em;
  padding-bottom: 6em;
  margin: 0;
  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    padding-top: 1em !important;
    padding-bottom: 1em !important;
    span {
      line-height: 1.2em;
    }
  }
  .image.line {
    width: 24px;
    height: 24px;
    padding-top: 11px;
    padding-bottom: 11px;
  }
}
table.table {
  background: transparent;
  th {
    border-bottom: 1px solid $green;
    font-size: 1.3em;
    color: $blue-dark;
    font-weight: 600;
  }
  th.features {
    color: $green;
  }
  td {
    vertical-align: middle;
    border-bottom: 1px solid rgba($blue-medium, 0.2);
    font-size: 0.9em;
  }
  th:nth-child(2),
  td:nth-child(2) {
    border-right: 1px solid rgba($blue-medium, 0.2);
  }
  @include mobile {
    tr {
      display: block;
      margin-bottom: 1.5em;
      td:first-child {
        text-align: center;
        font-size: 1.2em;
        font-weight: bold;
      }
    }
    td {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    tr:last-child td,
    tr:last-child th {
      border-width: 0 0 1px;
    }
    th:nth-child(2),
    td:nth-child(2) {
      border-right: 0px;
    }
  }
}
</style>
