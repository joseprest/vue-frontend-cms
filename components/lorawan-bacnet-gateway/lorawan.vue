<template>
  <div v-if="cmsData" class="lorawan">
    <h2 v-html="cmsData.title" />
    <div
      class="lorawan-bacnet-gateway-lorawan"
      v-html="$md.render(cmsData.content)"
    />
  </div>
</template>

<script>
export default {
  name: 'LorawanBacnetGatewayLorawan',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss">
.lorawan-bacnet-gateway-lorawan p {
  margin-bottom: 1em;
}
</style>

<style lang="scss" scoped>
.lorawan {
  margin-top: 4em;
  background: rgba($blue-light, 0.4);
  padding: 1.5em 2em;
  border-radius: 10px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05) !important;
}

h2 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 25px;
  color: rgba($blue-dark, 0.8);
}

p {
  margin-bottom: 1em;
}
</style>
