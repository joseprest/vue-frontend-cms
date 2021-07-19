<template>
  <div>
    <ws-title :title="cmsData.title" />
    <div class="columns is-multiline">
      <div
        v-for="action in cmsData.content"
        :key="`action${action.id}`"
        class="column is-3-widescreen is-6-desktop is-6-tablet is-12-mobile"
      >
        <action-card>
          <template slot="icon">
            <div class="icon">
              <img :src="$getImageUrlFromCms(action.icon)" alt="" />
            </div>
          </template>
          <template slot="title">
            {{ action.title }}
          </template>
          <template slot="elements">
            <ul class="list-item">
              <ws-list-item
                v-for="element in action.elements"
                :key="`element${element.id}`"
                check-type="check-blue"
              >
                <a
                  v-if="$isExternalUrl(element.link)"
                  :href="element.link"
                  :target="element.open_new_tab ? '_blank' : null"
                >
                  {{ element.text }}
                </a>
                <nuxt-link v-else-if="element.link" :to="element.link">
                  {{ element.text }}
                </nuxt-link>
                <span v-else>{{ element.text }}</span>
              </ws-list-item>
            </ul>
          </template>
        </action-card>
      </div>
    </div>
    <div class="buttons mt-35">
      <nuxt-link
        class="button is-success has-text-weight-semibold has-shadow btn-big is-uppercase"
        :class="{ 'is-inverted': cmsData.button.inverted }"
        style="z-index: 10"
        :to="cmsData.button.url"
      >
        {{ cmsData.button.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ActionCard from '../components/action-card.vue'

export default {
  components: {
    ActionCard,
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
.buttons > a {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.item-list {
  margin-bottom: 7px;
}
.icon {
  img,
  svg {
    max-height: 75px;
    width: 100%;
  }
}
</style>
