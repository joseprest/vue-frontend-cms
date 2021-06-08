<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <ws-image
          :src="$getImageUrlFromCms(cmsData.widget.image)"
          alt="Building"
        />
      </figure>
    </div>
    <div class="card-content">
      <h4 class="title">{{ cmsData.widget.text }}</h4>
      <div class="button-cta">
        <ws-button
          :key="`cs-getdemo-btn-${cmsData.button.id}`"
          :cms-data="cmsData.button"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetGetDemo',
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
  background: #fafafa;
  box-shadow: none;

  figure {
    img {
      margin: auto;
      width: 85%;
      padding-top: 2em;
    }
  }

  .card-content {
    padding: auto 30px;

    .title,
    .subtitle {
      font-size: $size-5;
      text-align: center;
      line-height: 1.5;
    }

    .button-cta {
      width: 100%;
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
