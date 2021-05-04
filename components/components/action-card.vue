<template>
  <div class="action">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="elements">
      <slot name="elements"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss">
.action {
  background: $white;
  padding: 5px;
  height: 100%;
  display: flex;
  flex-flow: column;
  border-radius: 10px;
  box-shadow: 0 16px 25px rgba(24, 69, 101, 0.06);
  .icon {
    height: 120px;
    width: 100%;
  }
  .title {
    font-size: 1em;
    text-align: center;
    padding: 0 10px;
    line-height: 1.5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .elements {
    background: rgba(#f1f5f7, 0.4);
    border-radius: 10px;
    width: 100%;
    flex-grow: 1;
    font-size: 0.9em;
    font-weight: 500;
    ul {
      padding: 0.7rem 1rem 0.4rem;
      li {
        color: rgba($blue-dark, 0.7);
        &:last-child {
          margin-bottom: 0;
        }
        @include touch {
          font-size: inherit;
        }
        a {
          color: rgba($blue-dark, 0.7);
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
