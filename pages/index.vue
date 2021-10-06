<template>
  <div v-if="Object.keys(cmsData).length > 0">
    <template v-for="comp in cmsData.body">
      <component
        :is="$getComponentFromCms(comp.__component)"
        v-if="comp.__component === 'index-components.header'"
        :key="`body-${comp.__component}-${comp.id}`"
        :cms-data="comp"
        :navbar-data="navbarData"
      />
      <section
        v-else
        :key="`body-${comp.__component}-${comp.id}`"
        class="section"
        :class="comp.__component.replace('index-components.', '')"
      >
        <div
          v-if="comp.__component === 'index-components.how-it-works'"
          class="gradiant"
        >
          <img src="@/assets/imgs/gradiant-bg-blue.svg" alt="bg" />
        </div>
        <div class="container">
          <component
            :is="$getComponentFromCms(comp.__component)"
            :key="`body-${comp.__component}-${comp.id}`"
            :cms-data="comp"
          />
        </div>
      </section>
    </template>
    <app-footer />
  </div>
</template>

<script>
export default {
  name: 'Index',

  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms('/homepage?_locale=' + i18n.localeProperties.iso)
      ),
      $axios.get(
        $getUrlFromCms('/navbar?_locale=' + i18n.localeProperties.iso)
      ),
    ])
    return {
      cmsData: {
        ...content[0].data,
      },
      navbarData: {
        ...content[1].data,
      },
    }
  },

  head() {
    return {
      title: this.cmsData.meta.title,
      meta: this.$getMeta(this.cmsData.meta),
      script: [
        {
          type: 'application/ld+json',
          json: this.$getStructuredData(),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.section.clients {
  padding-top: 6rem;
  padding-bottom: 0;
}

section.connect {
  padding-top: 6rem;
  padding-bottom: 6rem;
  @include desktop {
    padding-top: 0;
  }
  @include mobile {
    padding-top: 1.5rem;
  }
}

.customer-stories {
  padding-top: 6rem;
  padding-bottom: 6rem;
  margin-bottom: 0;
  background: linear-gradient(to top, white, #f8fcff);
}

.section.get-demo {
  background: rgba($blue-dark, 0.05);
  padding-top: 1rem;
  padding-bottom: 6rem;

  @include touch {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .container {
    z-index: 12;
  }
}

.section.how-it-works {
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
  .container {
    z-index: 4;
  }
}

.section.improving {
  margin-top: 4em;
}

section.section:last-of-type {
  background-color: #f5fafe;
  &:before {
    content: '';
    right: 0;
    left: 0;
    border-top-width: 0;
    border-right-width: 50vw;
    border-bottom-width: 100px;
    border-left-width: 50vw;
    border-style: solid;
    display: block;
    width: 0;
    position: absolute;
    top: -100px;
    border-color: #f5fafe transparent;
  }
}

section.integrations {
  padding-bottom: 8rem;
  @include tablet-only {
    padding-bottom: 12rem;
  }
  @include mobile {
    padding-top: 4rem;
  }
}

section.plug-play {
  padding-top: 6rem;
  padding-bottom: 10rem;
  @include desktop-only {
    padding-bottom: 6rem;
  }
  @include touch {
    padding-top: 6rem;
    padding-bottom: 0rem;
  }
}

.testimonials.home {
  padding: 2rem 8.5rem 4rem;
  @include touch {
    padding: 2rem 2rem 4rem;
  }

  .container {
    width: 100%;
  }
}

section.unify {
  background: linear-gradient(180deg, #f5fafe -25%, rgba(#f5fafe, 0.5) 120%);
  padding-top: 13rem;
  padding-bottom: 5rem;
  @include touch {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
}

section.upgrade {
  padding-top: 4rem;
  padding-bottom: 0rem;
  position: relative;

  .container {
    z-index: 10;
  }

  @include touch {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  &::after {
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 200px;
    bottom: -70px;
    left: 0;
    z-index: 1;
    background: $white;
    transform: skewY(-5deg);
    @include touch {
      display: none;
    }
  }
}
</style>
