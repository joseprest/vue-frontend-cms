<template>
  <span v-if="showAnim">
    <div
      v-for="(protocol, key) in protocols"
      :id="`protocol${key}`"
      :key="`index_${key}`"
      :class="`protocol protocol${key} ${$i18n.locale}`"
    >
      {{ protocol }}
    </div>
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
      // protocols animations
      animate({
        elements: document.querySelector('#protocol1'),
        easing: 'linear',
        duration: 7500,
        // delay: 5000,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-650%)'],
      })
      animate({
        elements: document.querySelector('#protocol2'),
        easing: 'linear',
        duration: 7000,
        delay: 2000,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-650%)'],
      })
      animate({
        elements: document.querySelector('#protocol3'),
        easing: 'linear',
        duration: 4500,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-950%)'],
      })
      animate({
        elements: document.querySelector('#protocol4'),
        easing: 'linear',
        duration: 5000,
        delay: 1000,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-750%)'],
      })
      animate({
        elements: document.querySelector('#protocol5'),
        easing: 'linear',
        duration: 8500,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-650%)'],
      })
      animate({
        elements: document.querySelector('#protocol6'),
        easing: 'linear',
        duration: 6500,
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-850%)'],
      })
      animate({
        elements: document.querySelector('#protocol7'),
        easing: 'linear',
        duration: 7000,
        delay: 3000,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-850%)'],
      })
      animate({
        elements: document.querySelector('#protocol8'),
        easing: 'linear',
        duration: 8000,
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-650%)'],
      })
      animate({
        elements: document.querySelector('#protocol9.fr'),
        easing: 'linear',
        duration: 7000,
        delay: 5000,
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-650%)'],
      })
      animate({
        elements: document.querySelector('#protocol9.en'),
        easing: 'linear',
        duration: 7000,
        delay: 5000,
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-850%)'],
      })
      animate({
        elements: document.querySelector('#protocol9.de'),
        easing: 'linear',
        duration: 7000,
        delay: 5000,
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-850%)'],
      })
      animate({
        elements: document.querySelector('#protocol10'),
        easing: 'linear',
        duration: 8500,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-750%)'],
      })
      animate({
        elements: document.querySelector('#protocol10.de'),
        easing: 'linear',
        duration: 8500,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-700%)'],
      })
      animate({
        elements: document.querySelector('#protocol11.fr'),
        easing: 'linear',
        duration: 5500,
        delay: 6000,
        loop: true,
        direction: 'normal',
        transform: ['translate(10%)', 'translate(-340%)'],
      })
      animate({
        elements: document.querySelector('#protocol11.en'),
        easing: 'linear',
        duration: 6000,
        delay: 5000,
        loop: true,
        direction: 'normal',
        transform: ['translate(0%)', 'translate(-450%)'],
      })
      animate({
        elements: document.querySelector('#protocol11.de'),
        easing: 'linear',
        duration: 6000,
        delay: 5000,
        loop: true,
        direction: 'normal',
        transform: ['translate(0%)', 'translate(-390%)'],
      })
      animate({
        elements: document.querySelector('#protocol12'),
        easing: 'linear',
        duration: 6000,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-1150%)'],
      })
      animate({
        elements: document.querySelector('#protocol13'),
        easing: 'linear',
        duration: 6000,
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-950%)'],
      })
      animate({
        elements: document.querySelector('#protocol14'),
        easing: 'linear',
        duration: 5000,
        delay: 3000,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-1050%)'],
      })
      animate({
        elements: document.querySelector('#protocol15.fr'),
        easing: 'linear',
        duration: 5000,
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-410%)'],
      })
      animate({
        elements: document.querySelector('#protocol15.en'),
        easing: 'linear',
        duration: 5000,
        loop: true,
        direction: 'normal',
        transform: ['translate(50%)', 'translate(-350%)'],
      })
      animate({
        elements: document.querySelector('#protocol15.de'),
        easing: 'linear',
        duration: 5000,
        loop: true,
        direction: 'normal',
        transform: ['translate(0%)', 'translate(-450%)'],
      })
      animate({
        elements: document.querySelector('#protocol16.fr'),
        easing: 'linear',
        duration: 5000,
        delay: 6000,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-470%)'],
      })
      animate({
        elements: document.querySelector('#protocol16.en'),
        easing: 'linear',
        duration: 5000,
        delay: 6000,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-500%)'],
      })
      animate({
        elements: document.querySelector('#protocol16.de'),
        easing: 'linear',
        duration: 5000,
        delay: 6000,
        opacity: [0, 1],
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-500%)'],
      })
      animate({
        elements: document.querySelector('#protocol17.fr'),
        easing: 'linear',
        duration: 8000,
        delay: 8000,
        loop: true,
        direction: 'normal',
        transform: ['translate(50%)', 'translate(-850%)'],
      })
      animate({
        elements: document.querySelector('#protocol17.en'),
        easing: 'linear',
        duration: 8000,
        delay: 8000,
        loop: true,
        direction: 'normal',
        transform: ['translate(50%)', 'translate(-850%)'],
      })
      animate({
        elements: document.querySelector('#protocol17.de'),
        easing: 'linear',
        duration: 8000,
        delay: 8000,
        loop: true,
        direction: 'normal',
        transform: ['translate(50%)', 'translate(-850%)'],
      })
      animate({
        elements: document.querySelector('#protocol18'),
        easing: 'linear',
        duration: 7000,
        loop: true,
        direction: 'normal',
        transform: ['translate(100%)', 'translate(-750%)'],
      })

      // arrows animations
      animate({
        elements: document.querySelector('#arrow-right'),
        easing: 'linear',
        duration: 1000,
        loop: true,
        direction: 'alternate',
        transform: ['translate(0%)', 'translate(20%)'],
      })
      animate({
        elements: document.querySelector('#arrow-left'),
        easing: 'linear',
        duration: 1000,
        loop: true,
        direction: 'alternate',
        transform: ['translate(0%)', 'translate(-20%)'],
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
