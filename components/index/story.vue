<template>
  <div class="story">
    <p class="text">"{{ testimonial.text }}"</p>
    <p class="link">
      <ws-link
        :title="fullStory"
        :url="testimonial.read_more_link"
        :is-small="true"
        :is-halftransparent="true"
        class="mt-25 is-size-7"
      />
    </p>
    <div class="infos">
      <span class="logo">
        <figure class="image">
          <ws-image :src="$getImageUrlFromCms(testimonial.logo)" alt="" />
        </figure>
      </span>
      <span class="name">
        {{ testimonial.name }}
      </span>
      <span class="job">
        {{ testimonial.job }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
    fullStory: {
      type: String,
      default: 'Read more',
    },
    testimonial: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.story {
  .text {
    position: relative;
    color: $grey;
    font-size: 0.9em;
    margin: 5px 10px 0;
  }
  .link {
    display: block;
    font-size: 0.8em;
    position: absolute;
    left: 30px;
    bottom: 20px;
    font-weight: bold;
    a,
    span {
      display: inline-flex;
      align-items: center;
      svg {
        margin-left: 5px;
      }
    }
  }
  .logo {
    position: absolute;
    left: -80px;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;

    img,
    div {
      max-width: 75px;
      max-height: 65px;
      height: auto;
      filter: grayscale(1);
    }
  }
  .infos {
    position: absolute;
    bottom: 20px;
    right: 30px;
    border-left: 1px solid rgba(#99b2c5, 0.6);
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    max-width: 150px;
    @include widescreen-only {
      max-width: 130px;
    }
    @include tablet-only {
      max-width: 130px;
    }
    @include mobile {
      max-width: 110px;
    }
    align-items: left;
    .job,
    .name {
      color: $grey;
      font-size: 0.65em;
    }
    .name {
      margin-bottom: 3px;
    }
    .job {
      font-size: 0.6em;
      opacity: 0.6;
      max-width: 90px;
    }
  }
}
</style>
