<template>
  <div class="div">
    <ws-title :title="cmsData.title" />

    <div class="pictos">
      <div class="columns">
        <template v-for="(icon, index) in cmsData.icons">
          <div :key="`icon${icon.id}`" class="column">
            <ws-image
              :src="$getImageUrlFromCms(icon)"
              :alt="icon.alternativeText"
            />
          </div>
          <div v-if="index < 2" :key="`icon-line${icon.id}`" class="column">
            <ws-image
              :src="require('@/assets/imgs/benefits/line.svg')"
              alt="line"
            />
          </div>
        </template>
      </div>
    </div>

    <!-- steps -->
    <div class="columns is-12 has-text-centered steps">
      <div
        v-for="step in cmsData.steps"
        :key="`step${step.id}`"
        class="column is-3-desktop is-12-touch"
      >
        <div class="align-top is-flex-column">
          <h3 class="title has-text-weight-medium">{{ step.title }}</h3>
          <p class="description-item">{{ step.text }}</p>
          <template v-if="step.details">
            <ul v-if="details" class="more">
              <li
                v-for="(detail, index) in step.details.split(`\n`)"
                :key="`detail${index}`"
              >
                {{ detail }}
              </li>
            </ul>
            <ws-link class="link" @click.native="toggleDetails">
              {{ details ? step.toggle_hide : step.toggle_show }}
            </ws-link>
          </template>
        </div>
      </div>
    </div>

    <div v-if="cmsData.button" class="cta">
      <div class="mt-35">
        <ws-button :cms-data="cmsData.button">
          <span>{{ cmsData.button.title }}</span>
        </ws-button>
      </div>
    </div>
    <button-discover-our-products
      v-else-if="cmsData.button_discover"
      :cms-data="cmsData.button_discover"
    />
  </div>
</template>

<script>
export default {
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
    category: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      details: false,
    }
  },

  methods: {
    toggleDetails() {
      this.details = !this.details
    },
  },
}
</script>

<style lang="scss" scoped>
.pictos {
  background: rgba($white, 0.1);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 40px;
  @include touch {
    .columns {
      display: flex;
    }
  }
  .column {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.button {
  @include touch {
    display: flex;
  }
}
.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  a,
  span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
  }
}
</style>
