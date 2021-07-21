<template>
  <span v-if="showAnim">
    <span
      v-for="protocol in protocolsList"
      :id="`protocol${protocol.id}`"
      :key="`index_${protocol.id}`"
      :class="`protocol type${protocol.__displayInfos__.type}`"
      :style="`top: ${protocol.__displayInfos__.top}%`"
    >
      {{ protocol.text }}
    </span>
  </span>
</template>

<script>
import animate, { setupPause } from '@/assets/js/animateplus.js'

/**
 * getRandomNumber
 * @param {Number} min Min value (inclusive)
 * @param {Number} max Max value (exclusive)
 * @param {Boolean} asInt output an integer
 */
function getRandomNumber(min, max, asInt = false) {
  if (!asInt) {
    return Math.random() * (max - min) + min
  }

  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

export default {
  name: 'Animation',

  props: {
    protocols: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      showAnim: true,
      triggerAnim: true,
    }
  },

  computed: {
    protocolsList() {
      const total = this.protocols.length
      // calculate position for each protocol in a range between 5% and 95% (that will be used on top style)
      const position = 90 / total // [90 = 95 - 5]
      let lastType = -1
      return this.protocols.map((protocol, index) => {
        // different styles for each element (styles are in scss)
        if (lastType + 1 > 5) {
          lastType = -1
        }
        return {
          ...protocol,
          __displayInfos__: {
            top: 5 + position * index + getRandomNumber(-3, 3), // generate a random position with min value for 5 (47 is the height of the element)
            type: ++lastType,
          },
        }
      })
    },
  },

  updated() {
    if (this.triggerAnim) {
      this.refreshAnimation()
    }

    if (this.showAnim === true) {
      this.loadAnimation()
    }
  },

  mounted() {
    this.loadAnimation()
    setupPause()
  },

  methods: {
    refreshAnimation() {
      this.triggerAnim = false
      this.showAnim = false
      setTimeout(() => {
        this.showAnim = true
      }, 300)
    },

    loadAnimation() {
      this.protocols.forEach((protocol) => {
        animate({
          elements: document.querySelector(`#protocol${protocol.id}`),
          easing: 'linear',
          duration: protocol.duration * getRandomNumber(1, 1.6),
          delay: protocol.delay,
          opacity: protocol.fade ? [0, 1] : [1, 1],
          loop: true,
          direction: 'normal',
          transform: [
            `translate(${protocol.transform_start}%)`,
            `translate(${protocol.transform_end}%)`,
          ],
        })
      })
      this.triggerAnim = true
    },
  },
}
</script>

<style lang="scss" scoped>
.protocol {
  position: absolute;
  border-radius: 40px;
  padding: 10px 20px;
  background: rgba($green, 0.2);
  color: $green;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  right: 0;

  &.type1 {
    background: rgba($cyan, 0.2);
    color: $cyan;
  }

  &.type2 {
    background: rgba($red, 0.2);
    color: $red;
  }

  &.type3 {
    background: rgba($green, 0.4);
    color: $green;
  }

  &.type4 {
    background: rgba($cyan, 0.4);
    color: $cyan;
  }

  &.type5 {
    background: rgba($red, 0.4);
    color: $red;
  }
}
</style>
