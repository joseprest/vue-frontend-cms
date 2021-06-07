<template>
  <div class="columns">
    <div id="improving" class="column is-half">
      <ws-paragraph class="has-text-left">
        <ws-title :title="cmsData.title1" align="left" size="small" />
        <div class="main-text mb-15" v-html="$md.render(cmsData.text1)" />
        <ws-link
          v-for="button in cmsData.buttons1"
          :key="`impr${button.id}`"
          :title="button.title"
          :url="button.url"
          class="mt-10"
        />
      </ws-paragraph>
    </div>

    <div id="simple" class="column is-half">
      <ws-paragraph class="has-text-left">
        <ws-title :title="cmsData.title2" align="left" size="small" />
        <div class="main-text mb-15" v-html="$md.render(cmsData.text2)" />
        <ws-link
          v-for="button in cmsData.buttons2"
          :key="`impr2-${button.id}`"
          :title="button.title"
          :url="button.url"
          class="mt-10"
        />
      </ws-paragraph>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.columns {
  margin-left: 0;
  margin-right: 0;
}

.bottom {
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

.title {
  font-size: $size-4;
}
.main-text {
  line-height: 1.75em;
  font-size: $size-6;
  margin-top: -2rem;
}

$padding-size: 70px;
#improving {
  padding-right: $padding-size !important;
  @include mobile {
    padding-right: 0 !important;
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
  .button.products {
    height: auto;
    .subtitle {
      color: $green;
    }
    .icon {
      vertical-align: middle;
      margin-top: -2px;
    }
  }
  .button.products.description {
    cursor: inherit !important;
    color: inherit !important;
    margin-bottom: 5px;
    margin-top: 20px !important;
    &:hover {
      text-decoration: none !important;
    }
  }
}

#simple {
  padding-left: $padding-size !important;
  @include mobile {
    padding-left: 0 !important;
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
}

@include until($widescreen) {
  #simple {
    padding-left: 15px;
  }

  #improving {
    padding: 0;
    border-right: 1px solid $grey-lighter;
  }
}
@include touch {
  .section {
    margin-top: 0;
  }
}

@include mobile {
  .main-text {
    min-height: 100%;
  }

  #simple {
    padding: 0;
    margin-top: 3rem;
  }

  #improving {
    border: 0;
  }
}
.button.long {
  display: inline-block;
  text-align: left;
  @include mobile {
    display: inherit;
    padding-top: 0;
    margin-bottom: 1em;
  }
  span {
    line-height: 1em;
  }
}
</style>
