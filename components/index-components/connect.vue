<template>
  <div>
    <ws-title align="0">
      {{ cmsData.title }}
      <template #description>
        {{ cmsData.description }}
      </template>
    </ws-title>
    <button-simple :cms-data="cmsData.Button" class="mt-25" />

    <div class="animation is-hidden-touch">
      <ws-image
        :src="require('~/assets/imgs/home/connect/box.svg')"
        alt="Wattsense Box"
        class="wsbox"
      />
      <div class="elements" />
      <ws-image
        :src="require('~/assets/imgs/home/connect/end.svg')"
        alt="Wattsense Box"
        class="end"
      />
    </div>
  </div>
</template>

<script>
import ButtonSimple from '@/components/button-simple.vue'
import { LogoBubbles } from '~/assets/js/index/logo-bubbles.js'

export default {
  name: 'IndexConnectAll',

  components: {
    ButtonSimple,
  },

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {}
  },

  mounted() {
    this.loadAnimation()
  },

  methods: {
    loadAnimation() {
      document.querySelector('.elements').innerHTML = ''

      const bubbles = [
        {
          x: 22.02,
          y: 9.95,
          s: 1.07,
        },
        {
          x: 163.34,
          y: 18.69,
          s: 0.66,
        },
        {
          x: 278.84,
          y: 7.3,
          s: 0.62,
        },
        {
          x: 415.12,
          y: 18.81,
          s: 0.68,
        },
        {
          x: 567.14,
          y: 6.56,
          s: 0.79,
        },
        {
          x: 721.66,
          y: 24.18,
          s: 0.9,
        },
        {
          x: 838.13,
          y: 16.86,
          s: 0.89,
        },
        {
          x: 963.01,
          y: 31.95,
          s: 0.9,
        },
        {
          x: 4.82,
          y: 101.29,
          s: 0.92,
        },
        {
          x: 168.57,
          y: 105.6,
          s: 0.88,
        },
        {
          x: 284.95,
          y: 112.7,
          s: 0.99,
        },
        {
          x: 415.48,
          y: 108.42,
          s: 0.83,
        },
        {
          x: 585.27,
          y: 106.69,
          s: 0.97,
        },
        {
          x: 704.29,
          y: 121.94,
          s: 1.05,
        },
        {
          x: 830.17,
          y: 102.06,
          s: 0.69,
        },
        {
          x: 996.41,
          y: 157.68,
          s: 0.84,
        },
        {
          x: 6.63,
          y: 216.49,
          s: 1,
        },
        {
          x: 172.51,
          y: 220.01,
          s: 0.6,
        },
        {
          x: 299.56,
          y: 211.27,
          s: 1.06,
        },
        {
          x: 422.55,
          y: 219.75,
          s: 0.78,
        },
        {
          x: 564.0,
          y: 217.0,
          s: 1.07,
        },
        {
          x: 706.45,
          y: 214.47,
          s: 0.75,
        },
        {
          x: 838.28,
          y: 224.57,
          s: 0.65,
        },
        {
          x: 969.73,
          y: 219.77,
          s: 1.02,
        },
      ]
      const logos = [
        {
          name: 'MBus',
          posX: '140px',
          posY: '212px',
        },
        {
          name: 'BACnet',
          posX: '68px',
          posY: '-5px',
        },
        {
          name: 'Modbus',
          posX: '68px',
          posY: '215px',
        },
        {
          name: 'Adeunis',
          posX: '-5px',
          posY: '0px',
        },
        {
          name: 'LonWorks',
          posX: '-5px',
          posY: '212px',
        },
        {
          name: 'KNX',
          posX: '140px',
          posY: '284px',
        },
        {
          name: 'Siemens',
          posX: '68px',
          posY: '140px',
        },
        {
          name: 'LoraWAN',
          posX: '212px',
          posY: '212px',
        },
        {
          name: 'Aermec',
          posX: '215px',
          posY: '0px',
        },
        {
          name: 'Bosch',
          posX: '-4px',
          posY: '-76px',
        },
        {
          name: 'Clivet',
          posX: '211px',
          posY: '353px',
        },
        {
          name: 'Daikin',
          posX: '139px',
          posY: '354px',
        },
        {
          name: 'MQTT',
          posX: '-3px',
          posY: '141px',
        },
        {
          name: 'Danfoss',
          posX: '68px',
          posY: '358px',
        },
        {
          name: 'Dedietrich',
          posX: '-3px',
          posY: '282px',
        },
        {
          name: 'ISMA',
          posX: '211px',
          posY: '283px',
        },
        {
          name: 'Lennox',
          posX: '68px',
          posY: '283px',
        },
        {
          name: 'netvox',
          posX: '212px',
          posY: '137px',
        },
        {
          name: 'Schneider',
          posX: '140px',
          posY: '140px',
        },
        {
          name: 'Socomec',
          posX: '-4px',
          posY: '67px',
        },
        {
          name: 'Trane',
          posX: '212px',
          posY: '65px',
        },
        {
          name: 'Viessmann',
          posX: '426px',
          posY: '68px',
        },
        {
          name: 'Atlantic',
          posX: '139px',
          posY: '-5px',
        },
      ]
      LogoBubbles({
        bubbles: bubbles.slice(0, logos.length),
        logos,
        containerSelector: '.elements',
        scrollSpeed: 0.4,
        maxContainerSizeToMobile: 610,
        containerWidth: 1097,
        noiseSpeed: 0.005,
        noiseAmount: 5,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.ws-title {
  margin-bottom: 0;
}

.button {
  white-space: inherit;
  @include desktop-only {
    display: contents;
  }
  @include touch {
    display: contents;
  }
}

.animation {
  margin-top: 2rem;
  width: 100%;
  height: 312px;
  position: relative;
  .wsbox {
    position: absolute;
    top: -26px;
    left: -7px;
    z-index: 2;
    @include widescreen-only {
      left: -80px;
    }
    @include desktop-only {
      left: -80px;
    }
    @include touch {
      left: -30px;
    }
    @include mobile {
      display: none;
    }
  }
  .end {
    position: absolute;
    top: -26px;
    right: -40px;
    z-index: 2;

    @include desktop {
      right: -50px;
    }
    @include touch {
      right: -30px;
    }
    @include mobile {
      display: none;
    }
  }
  .elements {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    .element {
      position: absolute;
    }
  }
}
</style>
