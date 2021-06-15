<template>
  <span v-if="showAnim">
    <span
      v-for="protocol in protocols"
      :id="`protocol${protocol.id}`"
      :key="`index_${protocol.id}`"
      :class="`protocol protocol${protocol.id} ${$i18n.locale}`"
    >
      {{ protocol.text }}
    </span>
  </span>
</template>

<script>
import animate, { setupPause } from '@/assets/js/animateplus.js'

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
          duration: protocol.duration,
          delay: protocol.delay,
          opacity: protocol.fade ? [0, 1] : 1,
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

  &.protocol1 {
    top: 5%;
    right: -20px;
    background: rgba($cyan, 0.2);
    color: $cyan;
  }

  &.protocol2 {
    top: 10%;
    right: -40px;
    background: rgba($red, 0.2);
    color: $red;
  }

  &.protocol3 {
    top: 15%;
    right: 0;
  }

  &.protocol4 {
    top: 25%;
    right: -50px;
  }

  &.protocol5 {
    top: 30%;
    right: -30px;
    background: rgba($cyan, 0.2);
    color: $cyan;
  }

  &.protocol6 {
    top: 50%;
    right: 0;
  }

  &.protocol7 {
    top: 55%;
    right: -20px;
  }

  &.protocol8 {
    top: 45%;
    right: -40px;
    background: rgba($red, 0.2);
    color: $red;
  }

  &.protocol9 {
    top: 40%;
    right: -50px;
  }

  &.protocol10 {
    top: 25%;
    right: 0;
  }

  &.protocol11 {
    top: 75%;
    right: -160px;
    background: rgba($red, 0.2);
    color: $red;
  }

  &.protocol12 {
    top: 63%;
    right: -100px;
    background: rgba($cyan, 0.2);
    color: $cyan;
  }

  &.protocol13 {
    top: 15%;
    right: 0;
  }

  &.protocol14 {
    top: 28%;
    right: 0;
    background: rgba($red, 0.2);
    color: $red;
  }

  &.protocol15 {
    top: 65%;
    &.fr {
      right: 0;
    }
    &.en {
      right: -40px;
    }
    &.de {
      right: -100px;
    }
  }

  &.protocol16 {
    top: 48%;
    right: -120px;
  }

  &.protocol17 {
    top: 35%;
    right: -90px;
    background: rgba($red, 0.2);
    color: $red;
  }

  &.protocol18 {
    top: 40%;
    right: -20px;
    background: rgba($cyan, 0.2);
    color: $cyan;
  }

  &.protocol19 {
    top: 75%;
    right: 0;
  }
}
</style>
