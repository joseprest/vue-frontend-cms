<template>
  <section class="section advantages">
    <div class="container">
      <ws-title :title="cmsData.title" align="left" class="advantages" />
      <ws-link
        v-if="cmsData.button"
        :title="cmsData.button.title"
        :url="cmsData.button.url"
        target="_blank"
        class="bacs"
      />
      <div class="columns is-multiline">
        <template v-for="(advantage, key) in cmsData.advantages">
          <div
            v-if="key !== 'title'"
            :key="`advantage_${key}`"
            class="column is-4-desktop is-6-tablet"
          >
            <advantage
              :icon="$getImageUrlFromCms(advantage.image)"
              :title="advantage.title"
              :description="$md.render(advantage.text)"
              :link="''"
              :url="''"
            />
          </div>
        </template>
      </div>

      <!-- CTA -->
      <div class="cta mt-10">
        <div class="buttons mt-35 mb-35">
          <ws-button
            v-for="btn in cmsData.buttons"
            :key="`btn${btn.id}`"
            :cms-data="btn"
            class="mr-10 has-text-weight-semibold has-shadow btn-big is-uppercase"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Advantage from '../components/advantage.vue'

export default {
  name: 'ProductsBoxAdvantages',
  components: {
    Advantage,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.advantages {
  margin: 0;
  padding-top: 1em;
  padding-bottom: 1em;
}
.ws-title.advantages {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
.bacs {
  margin-top: -20px;
  margin-bottom: 60px;
}
.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
