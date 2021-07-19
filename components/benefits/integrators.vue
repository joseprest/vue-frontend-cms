<template>
  <div>
    <ws-title
      v-if="cmsData.title"
      :title="cmsData.title"
      class="has-text-left mb-10"
    />

    <div
      v-if="!$fetchState.pending && !$fetchState.error && integrators.length"
      class="columns is-multiline"
    >
      <div
        v-for="item of listIntegrators"
        :key="`int-${item.id}`"
        class="column is-4"
      >
        <div class="card">
          <a :href="item.link" :target="item.open_new_tab ? '_blank' : ''">
            <span class="card-image">
              <ws-image
                class="card-image"
                :src="$getImageUrlFromCms(item.image)"
                :placeholder="$getImageUrlFromCms(item.image, 'thumbnail')"
                :alt="item.title"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
    <ws-link
      v-if="cmsData.full_list_link"
      :title="cmsData.full_list_link.text"
      :url="cmsData.full_list_link.link"
      class="mt-25"
    />
  </div>
</template>

<script>
export default {
  name: 'Integrations',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      integrators: [],
    }
  },

  async fetch() {
    const { data } = await this.$axios.get(this.$getUrlFromCms('/integrators'))
    this.integrators = [...data]
  },

  computed: {
    listIntegrators() {
      const integrators = [...this.integrators]
      return integrators.sort(() => Math.random() - 0.5).splice(0, 3) // max 3 integrators per page
    },
  },

  activated() {
    // Call fetch again if last fetch more than 120 sec ago - 2min
    if (this.$fetchState.timestamp <= Date.now() - 1200000) {
      this.$fetch()
    }
  },
  // call fetch only on client-side
  fetchOnServer: true,
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.4s ease-in-out;
  border: 1px solid #ecf2fc;
  box-shadow: 0px 3px 15px rgba(113, 150, 193, 0.07);
  border-radius: 5px;
  &-new {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    font-weight: 500;
    height: 1.8em;
    padding-top: 3px;
    padding-left: 0.6em;
    padding-right: 0.6em;
  }
  &-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 181px;
    margin-bottom: 0;
    img {
      max-width: 70%;
      max-height: 85px;
      height: auto;
      width: auto;
    }
  }
}
</style>
