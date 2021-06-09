<template>
  <div class="columns is-multiline">
    <div class="column is-5 is-12-touch box-img">
      <div class="circle">
        <div class="circle-inside"></div>
        <img
          :src="$getImageUrlFromCms(cmsData.image)"
          :alt="cmsData.image.alternativeText"
        />
      </div>
      <made-in-france :text="cmsData.made" />
      <div class="buttons">
        <ws-button :cms-data="cmsData.button" />
      </div>
    </div>
    <div class="box-content column is-7 is-12-touch">
      <ws-title
        :title="cmsData.title"
        :description="cmsData.text"
        align="left"
      />

      <div class="columns is-multiline">
        <div class="column is-5-widescreen is-12-desktop features">
          <div>
            <component
              :is="feature.link ? 'nuxt-link' : 'span'"
              v-for="feature in cmsData.features"
              :key="`feature${feature.id}`"
              class="link"
              :to="feature.link"
            >
              {{ feature.text }}
            </component>
          </div>
        </div>
        <div class="column is-7-widescreen is-12-desktop protocols">
          <ul class="list-item">
            <ws-list-item
              v-for="protocol in cmsData.protocols"
              :key="`protocol${protocol.id}`"
              check-type="check"
            >
              <span>
                {{ protocol.text }}
                <span
                  v-if="protocol.badge"
                  style="
                    display: inline-block;
                    margin-left: 5px;
                    font-size: 0.8rem;
                    padding: 3px 10px;
                    background: #2bc47b;
                    border-radius: 30px;
                  "
                  >{{ protocol.badge }}</span
                >
              </span>
            </ws-list-item>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MadeInFrance from '../components/made-in-france.vue'

export default {
  components: {
    MadeInFrance,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      position: null,
      count: 0,
    }
  },

  methods: {
    scrollToElement(element) {
      this.position = document.getElementById(element).offsetTop
      if (this.count === 0) {
        if (element === 'edge') {
          window.scrollTo({
            top: this.position - 600,
            behavior: 'smooth',
          })
        }
        if (element === 'wizard') {
          window.scrollTo({
            top: this.position - 200,
            behavior: 'smooth',
          })
        }
        if (element === 'gateway') {
          window.scrollTo({
            top: this.position - 430,
            behavior: 'smooth',
          })
        }
        this.count++
      } else {
        window.scrollTo({
          top: this.position,
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.columns {
  display: flex;
  @include touch {
    flex-direction: column-reverse;
  }
}
.box-content {
  color: $white;
  .button {
    justify-content: left;
  }
  @include touch {
    margin-top: -1em;
  }
}
.box-img {
  margin-top: 1.5em;
  @include touch {
    margin-top: 4em;
  }
}
.circle {
  border: 2px solid rgba($white, 0.05);
  border-radius: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @include desktop {
    height: 350px;
    width: 350px;
  }
  @include touch {
    height: 300px;
    width: 300px;
  }
  .circle-inside {
    background-color: rgba($white, 0.05);
    border-radius: 50%;
    @include desktop {
      height: 320px;
      width: 320px;
    }
    @include touch {
      height: 270px;
      width: 270px;
    }
  }
  img {
    position: absolute;
    height: auto;
    margin-top: -80px;
    @include desktop {
      width: 300px;
    }
    @include touch {
      width: 250px;
    }
  }
  img:not(*:root) {
    margin-top: -40px;
  }
}
.buttons {
  margin-top: 20px;
  flex-direction: column;
  .button {
    margin-left: auto;
    margin-right: auto;
    line-height: 1.1em !important;
    span {
      white-space: break-spaces;
      text-align: left;
    }
  }
  .legend {
    display: flex;
    align-items: center;
    color: $white;
    margin-bottom: 5px;
    font-size: 0.9em;
  }
}
.features {
  div {
    margin-top: 0;
    margin-bottom: 0;
    .link {
      color: $green;
      font-size: 0.9em;
      font-weight: 600;
      text-align: center;
      display: block;
      border-radius: 10px;
      padding: 5px;
      margin-bottom: 7px;
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0.07) 0%,
        rgba(255, 255, 255, 0) 119.9%
      );
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  a.link {
    cursor: pointer;
  }
  a.nolink {
    cursor: inherit;
  }
  @include touch {
    padding-bottom: 1rem;
  }
}
.protocols {
  ul {
    columns: 2;
    border-left: 2px solid rgba($white, 0.05);
    padding-left: 5px;
    margin-top: 0;
    margin-bottom: 0;
    height: 260px;
    @media screen and (min-width: 1041px) and (max-width: 1160px) {
      height: 290px;
    }
    @include touch {
      border: 0;
      padding-left: 0;
      height: auto;
    }
    li {
      font-size: 0.9em;
      margin-bottom: 15px;
      font-weight: inherit;
    }
  }
  .list-item {
    padding: 0 0 0 20px;
    color: $white;
  }
}
.ws-title {
  margin-bottom: 1.5em !important;
}
</style>
