<template>
  <div class="story-header">
    <div class="container">
      <nav
        class="breadcrumb has-arrow-separator is-small"
        aria-label="breadcrumbs"
      >
        <ul>
          <li
            v-for="item in cmsData.globals.breadcrumbs"
            :key="`bc-${item.id}`"
          >
            <router-link :to="localePath(item.link)">
              {{ item.text }}
            </router-link>
          </li>
          <li class="is-active">
            <a href="#">{{ cmsData.customer }}</a>
          </li>
        </ul>
      </nav>

      <div class="columns headline">
        <div
          class="column is-8 is-12-touch is-flex"
          style="flex-direction: column; justify-content: center"
        >
          <h1 class="title">
            {{ cmsData.page_title.title }}
          </h1>
          <p v-if="cmsData.page_title.description" class="description">
            {{ cmsData.page_title.description }}
          </p>
        </div>
        <div class="column is-4 is-12-touch">
          <div v-if="cmsData.results" class="results">
            <div class="title">{{ cmsData.globals.results_title }}</div>
            <div
              v-for="res in cmsData.results"
              :key="`result${res.id}`"
              class="story-result"
              :class="{ 'mb-15': !res.value }"
            >
              <span v-if="res.value" class="value">
                {{ res.value }}
              </span>
              <span class="description">
                <span v-if="!res.value" class="arrow">
                  <img src="@/assets/imgs/arrow.svg" alt="-" />
                </span>
                {{ res.description }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerStoryHeader',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
    customerResults: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.story-header {
  background: #f5fafe;
  padding: 45px 20px;
  position: relative;
  margin-left: -1.5em;
  margin-right: -1.5em;
  text-align: left;

  &:before {
    content: '';
    width: 100%;
    height: 2px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      $green 50%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.headline {
  flex-wrap: unset;

  @include touch {
    flex-wrap: wrap;
  }

  .column:last-child {
    margin-top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @include touch {
      margin-top: 15px;
    }
  }

  .title {
    color: $body-color;
    font-size: $size-2;
    font-weight: $weight-semibold;
    line-height: 1.3;
    margin-bottom: 10px;
  }
  .description {
    font-size: $size-5;
    line-height: 1.7;
    font-weight: $weight-normal;
  }
}

.results {
  border: 1px solid $green;
  background: rgba($green, 0.9);
  color: $white;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  box-shadow: inset 0px 4px 10px -3px rgba(0, 0, 0, 0.1);

  .title {
    font-weight: $weight-normal;
    color: $white;
  }
}

.story-result {
  display: inline-flex;
  align-items: center;
  width: 100%;

  &.mb-15 {
    margin-bottom: 15px;
  }

  .value {
    font-size: $size-2;
    font-weight: $weight-bold;
    margin-right: 15px;
    max-width: 20px;
    min-width: 60px;
    text-align: center;
  }

  .description {
    font-size: $size-6;
    font-weight: $weight-normal;
    .arrow {
      font-weight: bold;
      font-size: $size-5;
      vertical-align: text-bottom;
      display: inline-flex;
      img {
        transform: rotate(180deg);
        margin-right: 5px;
        align-items: center;
        margin-bottom: 2px;
      }
    }
  }
}
</style>
