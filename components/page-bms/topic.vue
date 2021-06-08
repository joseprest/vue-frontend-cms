<template>
  <section style="margin-top: 3em">
    <div class="columns" :class="{ 'pb-2': show }">
      <div class="column is-3 has-text-weight-bold is-size-5">
        {{ title }}
      </div>

      <div class="column">
        <p class="has-text-weight-light see-more" style="margin-bottom: 0.7rem">
          <span v-html="intro"></span>
          <a
            v-if="!show"
            class="button is-small is-success is-inverted has-text-weight-bold"
            style="margin-left: 15px"
            @click="showMore()"
          >
            {{ seeMore }} &darr;
          </a>
        </p>

        <p
          v-show="show"
          class="has-text-weight-light see-more bms-topic-full-content"
          style="margin-top: 15px"
        >
          <span v-html="contentAfterIntro"></span>
        </p>

        <br />
        <a
          v-if="show"
          class="button is-small is-success is-inverted has-text-weight-bold see-less"
          @click="showMore()"
        >
          {{ seeLess }} &uarr;
        </a>
      </div>
    </div>

    <hr />
  </section>
</template>

<script>
export default {
  name: 'PageBmsTopic',
  props: {
    title: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    seeMore: {
      type: String,
      default: 'See more',
    },
    seeLess: {
      type: String,
      default: 'See less',
    },
  },

  data() {
    return {
      show: false,
    }
  },

  computed: {
    intro() {
      return this.$md.render(this.content.split('\n\n')[0])
    },

    contentAfterIntro() {
      const contentWithoutIntro = this.content
        .split('\n\n')
        .slice(1)
        .join('\n\n')
      return this.$md.render(contentWithoutIntro)
    },
  },

  methods: {
    showMore() {
      return (this.show = !this.show)
    },
  },
}
</script>

<style lang="scss">
.bms-topic-full-content {
  p {
    margin-bottom: 0.7rem;
  }
}
</style>

<style lang="scss" scoped>
hr {
  margin-top: 0;
}

.pb-2 {
  padding-bottom: 2em;
}
.see-more > a.button,
a.button.see-less {
  border: 1px solid $gray-lighter;
  display: table;
  margin-left: 0 !important;
  margin-top: 10px;
  padding: 1rem 1rem 0.7rem;
}
</style>
