<template>
  <page-container
    v-if="Object.keys(cmsData).length > 0"
    :cms-data="cmsData.page_title"
    :navbar-data="navbarData"
  >
    <section
      v-for="comp in cmsData.body"
      :key="`body-${comp.__component}-${comp.id}`"
      class="section"
      :class="
        comp.__component
          .replace('about-components.', '')
          .replace('page-global.', '')
      "
    >
      <div v-if="comp.__component === 'stack'" class="gradiant">
        <img src="@/assets/imgs/gradiant-bg-blue.svg" alt="bg" />
      </div>
      <div class="container">
        <component
          :is="$getComponentFromCms(comp.__component)"
          :cms-data="comp"
        />
      </div>
      <div v-if="comp.__component === 'stack'" class="line" />
    </section>
  </page-container>
</template>

<script>
export default {
  name: 'About',
  nuxtI18n: {
    paths: {
      en: '/about',
      fr: '/entreprise',
      de: '/uber',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms('/page-about?_locale=' + i18n.localeProperties.iso)
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
.section.manifesto {
  background-image: linear-gradient(to bottom, white, #f1f5f7);
  margin-bottom: 0;
}

.section.mission {
  z-index: 1;
}

.section.potential {
  z-index: 2;
  background: linear-gradient(180deg, #f5fafe 0%, #ffffff 100%);
  margin-bottom: 40px;
}

.section.stack {
  z-index: 2;
  background: linear-gradient(to bottom, $white 0%, $blue-dark 10%);
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 200px;
    top: -30px;
    left: 0;
    z-index: -1;
    background: $blue-dark;
    transform: skewY(4deg);
    @include mobile {
      height: 250px;
    }
  }
  .gradiant {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
    img {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}

.section.complexity {
  background: url('~@/assets/imgs/gradient-blue-white.svg') repeat-x 0 0;
  transform: skewY(-4deg);
  margin-bottom: 90px;
  @include mobile {
    margin-bottom: -50px;
  }
  @include tablet-only {
    margin-bottom: -100px;
  }
  @include desktop-only {
    margin-bottom: -50px;
  }
}

.section.clients {
  z-index: 2;
}

.section.button-section {
  padding-top: 0;
}

.section.who {
  background: linear-gradient(
    180deg,
    rgba(119, 131, 143, 0.08) -11.76%,
    rgba(245, 250, 254, 0) 100.24%
  );
}

.no-padding-top {
  padding-top: 0;
}

.board {
  @include widescreen {
    margin-left: 60px;
  }
}
</style>
