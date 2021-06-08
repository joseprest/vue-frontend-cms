<template>
  <div>
    <ws-title
      v-if="cmsData.title"
      :title="cmsData.title"
      class="has-text-left mb-10"
    />
    <div class="columns is-multiline">
      <div
        v-for="item of cmsData.integrations"
        :key="`int-${item.id}`"
        class="column is-4"
      >
        <div class="card">
          <!--          <span v-if="isNew && type != 'home'" class="tag is-primary card-new">-->
          <!--            NEW-->
          <!--          </span>-->
          <a :href="item.url" :target="item.open_new_tab ? '_blank' : ''">
            <span class="card-image">
              <ws-image
                class="card-image"
                :src="$getImageUrlFromCms(item.image)"
                :alt="item.image.alternativeText"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
    <ws-link :title="cmsData.link.text" :url="cmsData.link.link" class="mt-25">
    </ws-link>
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
