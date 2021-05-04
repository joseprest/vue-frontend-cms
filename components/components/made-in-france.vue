<template>
  <div class="madeinfrance">
    <div class="flag">
      <div class="part"></div>
      <div class="part"></div>
      <div class="part"></div>
    </div>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'MadeInFrance',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.madeinfrance {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  background: rgba($white, 0.05);
  border-radius: 10px;
  padding: 10px;
  width: 135px;
  color: $white;
  .flag {
    display: flex;
    width: 100%;
    height: 6px;
    .part {
      display: inline-flex;
      width: 33%;
    }
    .part:nth-child(1) {
      background: #103e97;
    }
    .part:nth-child(2) {
      background: $white;
    }
    .part:nth-child(3) {
      background: #c64444;
    }
  }
  span {
    margin-top: 5px;
    margin-bottom: -5px;
    display: block;
    text-align: center;
    width: 100%;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1.4em;
  }
}
</style>
