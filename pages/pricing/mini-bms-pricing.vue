<template>
  <page-container :cms-data="cmsData.page_title" :navbar-data="navbarData">
    <section
      v-for="comp in cmsData.body"
      :key="`body-${comp.__component}-${comp.id}`"
      class="pricing-box section mini-bms-pricing"
      :class="
        comp.__component.replace('page-global.', '') +
        (comp.background === 'light-gray' ? ' bg-accent' : '')
      "
    >
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
  name: 'PricingMiniBms',
  nuxtI18n: {
    paths: {
      en: '/pricing/mini-bms',
      fr: '/tarifs/mini-gtb',
      de: '/preise/mini-bms',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms(
          '/page-pricing-mini-bms?_locale=' + i18n.localeProperties.iso
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
section.table-pricing {
  padding-top: 0;
}
.section.box-subscription {
  padding-top: 0;
  padding-bottom: 1em;
  @include touch {
    padding-top: 40px;
  }
}
.section.table {
  padding-bottom: 4rem;

  @include desktop {
    padding-bottom: 0;
  }
}

.section.ws-advantage {
  margin-top: 11rem;
  padding-top: 0;
  background-color: #f5fafe;
  background-image: linear-gradient(#f5fafe, #f5fafe);

  @include mobile {
    margin-top: 2rem;
  }

  &:before {
    content: '';
    right: 0;
    left: 0;
    top: -100px;
    border-top-width: 0;
    border-right-width: 50vw;
    border-bottom-width: 100px;
    border-left-width: 50vw;
    border-style: solid;
    display: block;
    width: 0;
    position: absolute;
    border-color: #f5fafe transparent;

    @include mobile {
      border-bottom-width: 50px;
      top: -50px;
    }

    @include tablet-only {
      border-bottom-width: 122px;
      top: -122px;
    }
  }
}
.mini-bms-pricing::v-deep .table {
  padding-left: 15px;
}
</style>
