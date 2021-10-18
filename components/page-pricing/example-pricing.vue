<template>
  <div class="has-text-centered" style="margin-bottom: 1rem">
    <h4 class="title">{{ cmsData.title }}</h4>
    <a
      class="button is-success has-shadow is-text is-inverted is-backgroundless has-text-weight-semibold mb-15 is-paddingless"
      @click="toggleDetails"
    >
      <span class="icon" :class="{ down: showDetails }">
        <ico-arrow />
      </span>
    </a>
    <div v-if="showDetails" class="img-example">
      <figure v-if="cmsData.icon" class="image">
        <ws-image :src="$getImageUrlFromCms(cmsData.icon)" alt="example" />
      </figure>
    </div>
    <ul v-if="showDetails && cmsData.features" class="items">
      <li
        v-for="(item, index) in cmsData.features.split(`\n`)"
        :key="`example${cmsData.id}-${index}`"
        class="item-example"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import IcoArrow from '@/assets/imgs/pricing/arrow.svg?inline'

export default {
  name: 'ExamplePricing',
  components: {
    IcoArrow,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showDetails: false,
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-size: $size-7;
  margin-bottom: 10px;
}
.img-example {
  display: flex;
  justify-content: center;
  padding-top: 0.5em;
  padding-bottom: 0.8em;
  .image,
  img {
    width: auto;
    height: 60px;
    display: table-cell;
    vertical-align: bottom;
  }
}
li.item-example {
  border-bottom: 1px solid rgba($gray-lighter, 0.5);
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
}
.items {
  font-size: $size-7;

  li {
    margin-bottom: 0.5rem;
  }
}
.button {
  width: 30px;
  height: 30px;
}
.icon {
  svg {
    width: 10px;
    height: auto;
    transform: rotate(-90deg);

    path {
      fill: $primary;
    }
  }
}
.icon.down {
  svg {
    transform: rotate(90deg);
  }
}
</style>
