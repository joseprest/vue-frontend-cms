<template>
  <page-container :cms-data="cmsData.page_title" :navbar-data="navbarData">
    <section
      v-for="(comp, index) in cmsData.body"
      :id="`section-${index}`"
      :key="`body-${comp.__component}-${comp.id}`"
      class="section"
      :class="
        comp.__component.replace('products.', '') +
        (comp.background === 'light-gray' ? ' bg-accent' : '')
      "
    >
      <div v-if="comp.__component === 'products.control'" class="gradiant">
        <img src="@/assets/imgs/gradiant-bg-blue.svg" alt="bg" />
      </div>
      <div class="container">
        <component
          :is="$getComponentFromCms(comp.__component)"
          :cms-data="comp"
        />
      </div>
    </section>
  </page-container>
</template>

<script>
export default {
  name: 'Productsbox',
  nuxtI18n: {
    paths: {
      en: '/products/box',
      fr: '/produits/box',
      de: '/produkte/box',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms(
          '/page-products-box?_locale=' + i18n.localeProperties.iso
        )
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
.cloud {
  margin-top: 2em;
  padding-bottom: 0;
}

.difference {
  background: rgba($blue-dark, 0.03);
}
.avantages {
  background: rgba($blue-dark, 0.03);
}
.actions {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: linear-gradient(to top, white, #f8fcff);
}
.bg-accent {
  background: $bg-accent;
}
@supports (background: -webkit-canvas(squares)) {
  .edge {
    background: transparent;
    margin-top: 0;
  }
}
.control {
  background: $blue-dark;
  padding-top: 6rem;
  padding-bottom: 0;
  z-index: 1;
  @include mobile {
    padding-bottom: 2rem;
  }
  &:before {
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 200px;
    bottom: -81px;
    left: 0;
    z-index: -1;
    background: $blue-dark;
    transform: skewY(-5deg);
  }
  &:after {
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 200px;
    bottom: -282px;
    left: 0;
    z-index: 0;
    background: #f9f9fa;
    transform: skewY(-5deg);
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
      bottom: -90px;
      right: 0;
    }
  }
}
.advantages {
  padding-top: 12rem;
  padding-bottom: 4rem;
  @include desktop-only {
    padding-top: 10rem;
  }
  @include touch {
    padding-top: 10rem;
  }
  @include mobile {
    padding-top: 8rem;
  }
}
.bg-accent {
  margin-top: 1em;
  padding-top: 6em;
  padding-bottom: 0;
  @include mobile {
    padding-top: 4rem;
  }
}
</style>
