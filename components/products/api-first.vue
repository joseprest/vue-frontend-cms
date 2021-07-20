<template>
  <div id="api" class="section api">
    <div class="container">
      <div class="columns is-multiline content">
        <div class="column is-6 is-12-touch">
          <client-only>
            <div class="code">
              <codes-menu
                :cms-data="cmsData"
                :active="content"
                @select-code="showContent"
              />
              <codes-content :code="content" />
            </div>
          </client-only>
        </div>
        <div class="column is-6 is-12-touch">
          <ws-title
            :title="cmsData.title"
            :description="cmsData.text"
            align="left"
          />
          <ws-link
            :title="cmsData.button.title"
            :url="
              cmsData.button.file ? cmsData.button.file.url : cmsData.button.url
            "
            target="_blank"
            class="mt-25"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodesMenu from '../components/codes-menu.vue'
import CodesContent from '../components/codes-content.vue'

export default {
  components: {
    CodesMenu,
    CodesContent,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      content: 'File upload',
    }
  },

  methods: {
    showContent(item) {
      this.content = item
    },
  },
}
</script>

<style lang="scss">
.api {
  margin-top: 2em;
  margin-bottom: 1.5em;
  @include touch {
    margin-top: 0;
  }
  .ws-title {
    margin-bottom: 0;
  }
  .code {
    box-shadow: 0px 0px 25px rgba(24, 69, 101, 0.06);
    border-radius: 10px;
    background: $white;
    padding: 1rem;
    margin-right: 10px;
    @include desktop {
      height: 373px;
    }
    @include touch {
      height: auto;
      margin-right: 0;
      margin-top: 2rem;
    }
  }
  .columns.content {
    display: flex;
    flex-direction: row;
    @include touch {
      flex-direction: column-reverse;
    }
  }
}
</style>
