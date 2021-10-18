<template>
  <div class="page-title">
    <div class="container">
      <div :class="{ 'columns is-vcentered': $slots.right }">
        <div :class="{ 'column is-8 is-12-touch': $slots.right }">
          <h1 class="page-title__title has-text-weight-semibold">
            {{ cmsData.title }}
            <span v-if="cmsData.badge" class="beta">
              {{ cmsData.badge }}
            </span>
          </h1>
          <div
            v-if="cmsData.description"
            class="page-title__description"
            v-html="$md.render(cmsData.description)"
          ></div>
          <div v-if="cmsData.buttons" class="mt-25">
            <ws-button
              v-for="btn in cmsData.buttons"
              :key="`head-btn-${btn.id}`"
              :cms-data="btn"
            />
          </div>
        </div>
        <div v-if="$slots.right" class="column is-4 is-hidden-touch">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  background: #f5fafe;
  padding-top: 45px;
  padding-bottom: 45px;
  position: relative;
  margin-left: -1.5em;
  margin-right: -1.5em;
  text-align: left;
  margin-bottom: 15px;

  @include touch {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      & > div {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
    }
  }

  &__title {
    font-size: $size-1;
    line-height: 1.2;
    margin-bottom: 10px;
  }
  &__description {
    font-size: $size-6;
  }

  &:before {
    content: '';
    width: 100%;
    height: 2px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #2bc47c 50%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    left: 0;
    bottom: 0;
  }

  h1 {
    position: relative;
  }

  .beta {
    display: inline-block;
    padding: 3px 10px;
    background: $green;
    border-radius: 30px;
    color: $white;
    font-size: 0.8rem;
    position: absolute;
    bottom: 10px;
    margin-left: 10px;
  }
}
</style>
