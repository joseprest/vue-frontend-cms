<template>
  <section class="section how">
    <div class="gradiant">
      <img src="~/assets/imgs/gradiant-bg-blue.svg" alt="bg" />
    </div>
    <div class="container">
      <ws-paragraph class="has-text-centered">
        <ws-title>
          {{ cmsData.title }}
          <template #description>
            {{ cmsData.subtitle }}
          </template>
        </ws-title>
      </ws-paragraph>
      <div class="columns is-12 has-text-centered steps">
        <div
          v-for="step of cmsData.steps"
          :key="`how-it-works-step-${step.id}`"
          class="column is-3-desktop is-12-touch"
        >
          <div class="align-top is-flex-column">
            <!-- v-scroll-reveal="{ delay: 0, reset: false }" -->
            <figure class="image">
              <ws-image
                :src="$getImageUrlFromCms(step.image)"
                :alt="step.title"
                height="180"
                width="180"
              />
            </figure>
            <h3 class="sequence-number">{{ step.step }}</h3>
            <h3 class="title is-size-5">
              {{ step.title }}
            </h3>
            <p class="description-item">
              {{ step.description }}
            </p>
            <p v-if="step.highlight" class="highlight-item">
              {{ step.highlight }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexHowItWorks',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
$margin-picture: 1rem;

.section.how {
  padding-top: 6rem;
  padding-bottom: 7rem;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    $blue-dark 75%,
    rgba($blue-dark, 0.05) 77%
  );
  position: relative;
  @include touch {
    background: $blue-dark;
  }
  &::before {
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 200px;
    bottom: 110px;
    left: 0;
    z-index: -1;
    background: $blue-dark;
    transform: skewY(-5deg);
    @include touch {
      display: none;
    }
  }
  &::after {
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 200px;
    bottom: -90px;
    left: 0;
    z-index: 0;
    background: #f5f5f7;
    transform: skewY(-5deg);
    @include touch {
      display: none;
    }
  }
  .gradiant {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    img {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}

.ws-title {
  color: $white;
}

#howitworks-bg {
  position: absolute;
  height: 50%;
  width: 100%;
  bottom: 0;
  left: 0;
  transform: skewY(1deg);
  // transform-origin: 0;
  background: #ffffff;
  overflow: hidden;
  z-index: 2;
}

#bd-hiw {
  position: absolute;
  height: 20vh;
  width: 35%;
  top: 10%;
  left: 0;
  transform: skewY(-20deg);
  transform-origin: 0;
  background: linear-gradient(to top right, #e6ebed, rgba(234, 238, 239, 0));
  overflow: hidden;
  z-index: 0;
}
</style>
