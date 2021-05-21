<template>
  <div>
    <ws-title :title="cmsData.title" align="left" />
    <div class="animation">
      <ws-image
        :src="$getImageUrlFromCms(cmsData.image)"
        :v-scroll-reveal="{
          distance: '-30px',
          origin: 'left',
          easing: 'ease-out',
          delay: 200,
          reset: false,
        }"
        class="building"
        :alt="cmsData.title"
      />
    </div>
    <!-- CTA -->
    <button-discover-our-products
      :cms-data="cmsData.ButtonDiscoverOurProducts"
    />
  </div>
</template>

<script>
export default {
  name: 'IndexUpgradeBms',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.ws-title {
  margin-right: 14em;
  @include mobile {
    margin-right: 0;
  }
}
.animation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img.building {
    width: 100%;
    max-width: 650px;
    height: auto;
    @include mobile {
      max-width: 100%;
    }
  }
  img.bullet {
    position: absolute;
    animation: hideshow 1.5s ease infinite;
  }
}
.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 35px;
  a,
  span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
  }
  button.inverted {
    background-color: rgba($white, 0.08);
    &:hover {
      background-color: rgba($white, 0.1);
    }
  }

  button.inverted.button {
    background-color: rgba($white, 1);
    span {
      color: $green !important;
    }
  }
  .dropdown-menu {
    width: 100%;
  }
  .dropdown-content {
    a {
      width: 100%;
      display: block;
      border-bottom: 1px solid rgba($gray-light, 0.3);
      padding-bottom: 0.6em;
      margin-bottom: 0.6em;
      &:hover {
        color: $green;
      }
      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
        margin-bottom: 0;
      }
    }
    .title {
      font-size: 1.2em;
    }
    .subtitle {
      font-size: 0.8em;
      opacity: 0.6;
    }
  }
}
</style>
