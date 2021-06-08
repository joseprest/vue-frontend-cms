<template>
  <section v-if="cmsData" class="section what-is-bms">
    <div class="container">
      <ws-title :title="cmsData.title" align="left" />

      <div class="columns has-text-justified">
        <p class="column is-5 text" v-html="$md.render(cmsData.left_column)" />

        <div class="column is-5 is-offset-1">
          <p class="text" v-html="$md.render(cmsData.right_column)" />

          <p class="buttons is-flex align-center mt-25">
            <ws-button
              v-if="cmsData.get_demo"
              class="mt-20"
              :cms-data="cmsData.get_demo"
            />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageBmsWhatIsBms',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  background: linear-gradient(to bottom, white, #f1f5f7);
}

.columns {
  line-height: 2em;
  margin-bottom: 1em;
  @include touch {
    margin-bottom: 0;
  }
}
</style>

<style lang="scss">
// this shouldn't be scoped because (I THINK) as the markdown text is rendered just-in-time, it won't get the scoped styling settings. So, unique class and it works as expected
.what-is-bms {
  .text {
    p:not(:last-child) {
      margin-bottom: 2em;
    }
  }
}
</style>
