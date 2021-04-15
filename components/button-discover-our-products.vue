<template>
  <div class="cta">
    <div class="dropdown is-hoverable mt-35">
      <div class="dropdown-trigger">
        <button
          class="button is-success inverted has-text-weight-semibold has-shadow btn-big is-uppercase"
        >
          <span>{{ cmsData.Title }}</span>
        </button>
      </div>
      <div id="dropdown-menu" class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <div class="dropdown-item">
            <router-link :to="cmsData.Link1" class="title">
              {{ cmsData.Title1 }}
              <div class="subtitle">{{ cmsData.Caption1 }}</div>
            </router-link>
            <router-link :to="cmsData.Link2" class="title">
              {{ cmsData.Title2 }}
              <div class="subtitle">{{ cmsData.Caption2 }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonDiscoverOurProducts',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 35px;
  a,
  span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
  }
  button.inverted {
    background-color: rgba($white, 0.08);
    &:hover {
      background-color: rgba($white, 0.1);
    }
  }

  button.inverted.button {
    background-color: rgba($white, 1);
    span {
      color: $green !important;
    }
  }
  .dropdown-menu {
    width: 100%;
  }
  .dropdown-content {
    a {
      width: 100%;
      display: block;
      border-bottom: 1px solid rgba($gray-light, 0.3);
      padding-bottom: 0.6em;
      margin-bottom: 0.6em;
      &:hover {
        color: $green;
      }
      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
        margin-bottom: 0;
      }
    }
    .title {
      font-size: 1.2em;
    }
    .subtitle {
      font-size: 0.8em;
      opacity: 0.6;
    }
  }
}
</style>
