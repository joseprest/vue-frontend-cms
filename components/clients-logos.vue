<template>
  <div class="logos">
    <div class="columns is-12 is-multiline is-centered">
      <div
        v-for="client of clients"
        :key="client.id"
        class="column is-narrow logo is-one-quarter is-2-desktop is-2-tablet is-12-mobile"
      >
        <ws-image
          :id="client.id"
          :src="$getImageUrlFromCms(client.logo)"
          :alt="client.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsLogos',
  props: {
    clients: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.logos {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 3em;
  @include touch {
    margin-bottom: 2em;
  }
  @include mobile {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .is-multiline {
    width: 100%;
  }

  .logo {
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    transition: opacity 0.1s linear;
    // max-width: 140px;
    padding: 15px 22px;
    img {
      min-width: 70px;
    }
    @include mobile {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @include mobile {
    .column:last-child {
      display: none;
    }
  }
}
</style>
