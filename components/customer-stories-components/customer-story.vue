<template>
  <div class="card">
    <div class="card-image">
      <router-link
        :to="localePath(`/resources/customer-stories/${cmsData.slug}`)"
      >
        <figure class="image">
          <ws-image
            :src="$getImageUrlFromCms(cmsData.card.image)"
            alt="customer"
          />
        </figure>
      </router-link>
    </div>
    <div class="card-content">
      <p class="subtitle is-size-6">
        {{ cmsData.card.text }}
      </p>
    </div>
    <div class="card-footer">
      <p class="card-footer-item">
        <ws-link
          :title="continueReading"
          :url="`/resources/customer-stories/${cmsData.slug}`"
          :is-small="true"
          :is-transparent="true"
        />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerStory',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
    continueReading: {
      type: String,
      default: 'continue reading',
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  transition: all 0.4s ease-in-out;
  border-radius: 5px;
  &:hover {
    // transform: scale(1.01);
    box-shadow: 0 5px 6px rgba(10, 10, 10, 0.1), 0 0 0 2px rgba(10, 10, 10, 0.1);
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // @include mobile {
  // 	display: block;
  // }

  &-image {
    display: flex;
    align-items: flex-start;
    min-height: 171px;
    margin-bottom: 1.5rem;

    figure img {
      max-height: 181px;
      width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    @include touch {
      min-height: unset;
      justify-content: center;

      figure img {
        padding: 0;
        max-height: unset;
      }
    }
  }

  &-content {
    display: flex;
    flex-grow: 1;
    margin-top: -1rem;
    .title {
      color: $body-color;
    }
    .subtitle {
      color: $body-color;
      line-height: 1.4;
    }

    @include desktop-only {
      margin-top: -2rem;
      padding-top: 0;
    }
  }

  &-footer {
    border-top: 0;
    justify-content: flex-end;
    &-item {
      justify-content: flex-end;
      .continue-reading {
        font-size: $size-7;
        color: $success;

        @include touch {
          font-size: $size-6;
        }
      }
    }
  }
}
</style>
