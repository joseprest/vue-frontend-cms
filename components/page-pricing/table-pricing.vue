<template>
  <div>
    <ws-title v-if="cmsData.title" :description="cmsData.title" />

    <div class="table columns is-multiline">
      <div
        v-for="(colTitle, colIndex) in cmsData.table_column_titles"
        :key="`coltitle${colTitle.id}`"
        class="column is-2-desktop"
        :class="
          colIndex === 0
            ? 'is-hidden-touch features'
            : 'is-6-tablet is-12-mobile iot'
        "
      >
        <ul>
          <li class="offers">
            <h4
              v-if="colIndex > 0"
              class="subscription is-size-4-widescreen is-size-5-desktop is-size-4-touch has-text-weight-light"
            >
              {{ colTitle.title }}
            </h4>
            <div v-if="colTitle.text" class="info is-hidden-touch">
              <ws-tooltip :tooltip="colTitle.text">
                <info-icon class="image is-24x24" />
              </ws-tooltip>
            </div>
          </li>
          <li class="features">
            <span
              v-if="colIndex === 0"
              class="is-size-6 has-text-weight-semibold features-caption"
            >
              {{ colTitle.title }}
            </span>
          </li>
          <template v-for="row in cmsData.rows">
            <li
              v-if="colIndex === 0"
              :key="`row-title-${row.id}`"
              class="others"
              :class="row.title_bold ? 'others__bold' : ''"
            >
              <span
                class="feature"
                :class="row.title_bold ? 'has-text-weight-semibold' : ''"
              >
                <span>
                  {{ row.title }}
                </span>
                <span v-if="row.badge" class="badge">
                  {{ row.badge }}
                </span>
                <span v-if="row.tooltip" class="ml-10">
                  <ws-tooltip :tooltip="row.tooltip">
                    <info-icon class="image is-16x16" />
                  </ws-tooltip>
                </span>
              </span>
            </li>
            <li
              v-else
              :key="`row-${row.id}-col-${colIndex}`"
              :class="row.value.length > 0 ? 'others' : 'empty-line'"
            >
              <template v-if="row.value.length > 0">
                <span class="feature touch">
                  <span>
                    {{ row.title }}
                  </span>
                  <span v-if="row.badge" class="badge">
                    {{ row.badge }}
                  </span>
                  <span v-if="row.tooltip" class="ml-10">
                    <ws-tooltip :tooltip="row.tooltip">
                      <info-icon class="image is-16x16" />
                    </ws-tooltip>
                  </span>
                </span>
                <check-icon
                  v-if="row.value[colIndex - 1].yes_no === true"
                  class="image is-24x24"
                />
                <line-icon
                  v-else-if="row.value[colIndex - 1].yes_no === false"
                  class="image line"
                />
                <span v-else-if="row.value[colIndex - 1].text">
                  {{ row.value[colIndex - 1].text }}
                </span>
              </template>
              <span
                v-else
                class="is-hidden-desktop is-size-7 has-text-weight-semibold has-text-centered"
              >
                {{ row.title }}
              </span>
            </li>
          </template>

          <!-- Price info buttons -->
          <!-- TODO: button handler -- popup form -->
          <li class="infoprices" />
          <li class="infoprice">
            <ws-button
              v-if="colIndex > 0"
              :cms-data="cmsData.price_info"
              is-small
              is-inverted
            />
          </li>

          <!-- Examples -->
          <li class="examples">
            <p
              v-if="cmsData.examples_title && colIndex === 0"
              class="is-size-6 has-text-weight-semibold features-caption"
            >
              {{ cmsData.examples_title }}
            </p>
          </li>
          <li v-if="colIndex > 0" class="example">
            <span v-if="cmsData.examples_title" class="feature touch">
              {{ cmsData.examples_title }}
            </span>
            <page-pricing-example-pricing
              v-for="example in cmsData.examples[colIndex - 1].examples"
              :key="`examples-${example.id}`"
              :cms-data="example"
            />
          </li>
          <li v-else class="example"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CheckIcon from '@/assets/imgs/check.svg?inline'
import LineIcon from '@/assets/imgs/line.svg?inline'
import InfoIcon from '@/assets/imgs/infos.svg?inline'

export default {
  name: 'PagePricingTablePricing',
  components: {
    CheckIcon,
    LineIcon,
    InfoIcon,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.badge {
  display: inline-block;
  margin-left: 5px;
  font-size: 0.6rem;
  padding: 3px 10px;
  background: #2bc47b;
  border-radius: 30px;
  color: white;
}
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

<style lang="scss" scoped>
.table {
  box-shadow: 0 0px 20px rgba(24, 69, 101, 0.06);
}

.columns.table {
  margin-top: 1em;
  .column {
    padding: 0;
    border-bottom: none;
    @include touch {
      border-bottom: 1px solid $gray_2;
    }

    &:not(:first-child) {
      border-right: 1px solid $gray_2;
      position: relative;
    }

    &.features {
      &:active {
        box-shadow: none !important;
      }
    }
  }

  @include desktop {
    .column:last-child {
      border-right: 0;
    }
  }
}

li.offers {
  height: 2em;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @include touch {
    min-height: 3em;
  }
  h4 {
    opacity: 0.5;
    margin-top: 1.2em;
    margin-left: -30px;
    @include touch {
      margin-top: 0;
      margin-left: 0;
    }
  }
}

li.features {
  height: 1.8em;
  border-bottom: 1px solid $green;
  margin-bottom: 1em;

  .pricing-hub & {
    margin-bottom: 0;
  }

  @include touch {
    height: auto;
    margin-bottom: 0.5em;
  }
}

.features-caption {
  color: $green;
}

.feature {
  width: 13rem;
  display: flex;
  align-items: left;
  justify-content: flex-start;
  // flex-direction: column;
  @include touch {
    width: auto;
  }
}
.secondary {
  color: #aac0d1;
}
.feature.touch {
  justify-content: center;
  text-align: center;
  margin-bottom: 0.5em;
  @include desktop {
    display: none;
  }
}

li.others {
  height: 2.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7em;

  @include touch {
    flex-direction: column;
    height: auto;
    min-height: 4.5em;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba($gray-lighter, 0.5);
  }

  .pricing-hub &__bold {
    padding: 0;
    margin: 0;
    margin-bottom: 0.35rem;
    padding-left: 0.5rem;
    height: 2.48rem;
    background-color: rgba(153, 178, 197, 0.1);
  }
}

.empty-line {
  height: 1.85em;
  background-color: rgba(153, 178, 197, 0.1);
  margin-right: -1px;
  padding-top: 2.45rem;
  display: block;
  @include touch {
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 4.5em;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba($gray-lighter, 0.5);
  }
}

li.datapoints,
li.max_datapoints {
  @include desktop {
    height: 1em;
  }
}
li.datapoints {
  @include desktop {
    margin-top: 1em;
  }
}
li.max_datapoints {
  @include desktop {
    margin-bottom: 0.5em;
  }
}

li.others {
  margin-bottom: 0.7em;
  span.feature {
    margin-right: 5px;
    div {
      margin-bottom: 5px;
      @include touch {
        margin-bottom: 0;
      }
    }
  }
}
li.others:first-of-type {
  margin-top: 1.2em;
  @include touch {
    margin-top: 0;
  }
}
li.others:last-of-type {
  @include touch {
    margin-bottom: 0;
    border-bottom: 0;
  }
}

li.infoprices {
  height: 0.8em;
  border-top: 1px solid $blue-light;
  margin-top: 1em;
  @include touch {
    height: auto;
    margin-top: 0;
  }
}
li.infoprice {
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  @include touch {
    height: 4em;
  }
}

li.examples {
  height: 1em;
  border-top: 1px solid $green;
  margin-top: 1em;
  p {
    color: $green;
  }
  @include touch {
    height: auto;
    margin-top: 0;
  }
}
li.example {
  padding: 0.75rem;
  .feature.touch {
    font-size: 0.7em;
    margin-bottom: 0.75rem;
  }
}

.price {
  font-size: 35px;
  @include widescreen-only {
    font-size: 1.4em;
  }
  @include desktop-only {
    font-size: 1em;
  }
}

.meters {
  height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 0.8rem;
}

.billing-switcher {
  margin: 27px 0;
}

.info {
  position: absolute;
  svg {
    width: 20px;
    height: 20px;
  }
  @include fullhd {
    top: 22px;
    right: 34px;
  }
  @include widescreen-only {
    top: 21px;
    right: 26px;
  }
  @include desktop-only {
    top: 20px;
    right: 20px;
  }
}
.infotouch {
  opacity: 0.5;
  margin-top: -5px;
}

.benefit {
  position: absolute;
  right: 20px;
  top: 35px;
  color: $white;
  padding: 5px;
  border-radius: 30px;
  font-size: 12px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('~/assets/imgs/icons/star.svg') no-repeat;
  background-size: 100% auto;
  background-position: 0 0;
}

.image.line {
  width: 24px;
  height: 24px;
  padding-top: 11px;
  padding-bottom: 11px;
}
</style>
