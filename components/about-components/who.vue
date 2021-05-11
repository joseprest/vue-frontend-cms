<template>
  <div class="who">
    <div class="content">
      <div class="title">
        <h2 class="has-text-weight-semibold is-size-3">{{ cmsData.title }}</h2>
      </div>
      <div class="has-text-weight-semibold">{{ cmsData.caption }}</div>
      <div class="keyfacts columns is-desktop">
        <div class="facts column is-two-thirds-widescreen">
          <div class="fact">
            <span class="has-text-weight-semibold is-size-3">
              {{ cmsData.year_launched }}
            </span>
            <div class="separator"></div>
            <span>{{ cmsData.year_launched_text }}</span>
          </div>
          <div class="fact">
            <span class="has-text-weight-semibold is-size-3">
              {{ cmsData.employees }}
            </span>
            <div class="separator"></div>
            <span>{{ cmsData.employees_text }}</span>
          </div>
          <div class="fact">
            <span class="has-text-weight-semibold is-size-3">
              {{ cmsData.financing_sum }}
            </span>
            <div class="separator"></div>
            <span>{{ cmsData.financing_text }}</span>
          </div>
        </div>
        <div class="founder column">
          <founder :user="cmsData.founder" />
        </div>
      </div>
      <div class="startup has-text-centered has-text-weight-semibold is-size-3">
        {{ cmsData.text }}
      </div>
      <div class="team">
        <ws-image :src="$getImageUrlFromCms(cmsData.photo)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Founder from './founder.vue'

export default {
  name: 'Who',
  components: {
    Founder,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      user: {
        name: 'Louis Vermorel',
        img: 'louis-vermorel.jpg',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.who {
  margin-top: 20px;
  margin-bottom: 20px;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    @include mobile {
      flex-direction: column;
    }
    .icon {
      height: 80px;
      width: 80px;
      background-color: $white;
      border: 1px solid $blue-light;
      border-radius: 50%;
      margin-right: 20px;
      @include mobile {
        margin-right: 0;
        margin-bottom: 20px;
      }
      img {
        align-items: center;
        justify-content: center;
        width: 60%;
      }
    }
    h2 {
      color: $green;
      margin-top: 0;
      margin-bottom: 0;
      @include tablet {
        width: 80%;
      }
      @include desktop {
        width: 80%;
      }
    }
  }
  .keyfacts {
    margin-top: 40px;
    .facts {
      border-radius: 10px;
      background: $green;
      color: $white;
      margin: 20px;
      display: flex;
      flex-direction: row;
      @include mobile {
        flex-direction: column;
      }
      .fact {
        padding: 1rem 2rem;
        min-width: 180px;
        @include mobile {
          padding: 0.5rem 1rem;
        }
        span {
          display: block;
          font-size: 0.9rem;

          &:last-child {
            margin-top: 5px;
            color: $black;
          }
        }
        .separator {
          padding: 0;
          display: block;
          width: 100%;
          height: 2px;
          opacity: 0.6;
          margin-top: 5px;
          margin-bottom: 10px;
          background-image: linear-gradient(to right, $white, $green);
        }
      }
    }
    .founder {
      border-radius: 10px;
      margin: 20px;
      align-items: center;
      display: flex;
      flex-direction: row-reverse;
      background: $white;
      box-shadow: 0 0 26px rgba(219, 222, 224, 0.4);
      @include mobile {
        min-height: 148px;
      }
      @include tablet {
        min-height: 148px;
        width: 40%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .startup {
    margin-top: 40px;
  }
  .team {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
    img {
      width: 600px;
    }
  }
}
</style>
