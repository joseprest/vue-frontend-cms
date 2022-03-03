<template>
  <div class="container py-6">
    <div class="columns is-multiline">
      <ws-title :title="cmsData.title" :description="cmsData.text" />
      <div
        v-for="(equip, index) in cmsData.equipments"
        :key="`site-equip-index-${equip.id}`"
        class="column .is-variable is-6"
      >
        <ws-title
          :title="equip.tip"
          :align="index == 0 ? 'left' : `center`"
          class="underline"
        />
        <figure class="image has-text-centered" :id="`item-${index}`">
          <ws-image :src="$getImageUrlFromCms(equip.image)" :alt="equip.tip" />
        </figure>
        <div class="description px-4">
          <p>{{ equip.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageMiniBmsEdgeDevice',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.section.edge-device {
  margin-bottom: 1.5rem;
}
@include touch {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
.columns {
  .column {
    figure {
      margin-bottom: 1rem;
      justify-content: center;
      display: flex;
      height: 250px;
      &#item-0 {
        &:after {
          content: '';
          background: url('~/assets/imgs/plus.svg') no-repeat center;
          position: absolute;
          right: 0;
          top: 50px;
          width: 40px;
          height: 100px;
        }
      }
      img {
        width: auto;
        height: auto;
      }
    }
  }
}
</style>
