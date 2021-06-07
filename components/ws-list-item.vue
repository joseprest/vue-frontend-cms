<template>
  <li class="item-list" :class="'item-list__' + checkType" :style="checkStyle">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'WsListItem',
  props: {
    text: {
      type: String,
      default: '',
    },
    checkType: {
      type: String,
      default: '',
    },
    checkStyle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.item-list {
  margin-bottom: 10px;
  padding-left: 30px;
  .is-large & {
    font-size: 18px;
    background-size: 24px;
    background-position: 0 3px;
    padding-left: 30px;
    margin-bottom: 25px;
  }

  .is-larger & {
    font-size: 18px;
    background-size: 30px;
    background-position: 0 0;
    padding-left: 50px;
    margin-bottom: 25px;
    min-height: 40px;
  }

  &__ok {
    padding-left: 20px;
    background: url('../assets/imgs/icons/check-item-ok.svg') no-repeat 0 7px;
  }
  &__okbold {
    padding-left: 20px;
    background: url('../assets/imgs/icons/check-item-ok-bold.svg') no-repeat 0
      4px;
  }
  &__no {
    padding-left: 20px;
    background: url('../assets/imgs/icons/check-item-no.svg') no-repeat 0 5px;
    background-size: 10px 10px;
  }
  &__nok {
    padding-left: 20px;
    background: url('../assets/imgs/icons/check-item-nok.svg') no-repeat 0 7px;
  }
  &__bullet {
    padding-left: 20px;
    background: url('../assets/imgs/icons/bullet.svg') no-repeat 1px center;
    background-size: 7px 7px;
  }
  &__check {
    padding-left: 30px;
    background: url('../assets/imgs/check.svg') no-repeat 0 3px;
    background-size: 20px 20px;
  }
  &__check-blue {
    padding-left: 30px;
    background: url('../assets/imgs/check-disable.svg') no-repeat 0 3px;
    background-size: 20px 20px;
  }
  &__read {
    background: url('../assets/imgs/icons/read.svg') no-repeat 0 center;
  }
  &__white {
    background: url('../assets/imgs/icons/write.svg') no-repeat 0 center;
  }
  &__4g {
    background: url('../assets/imgs/icons/4g.svg') no-repeat 0 center;
  }
  &__4g2 {
    background: url('../assets/imgs/icons/4g-v2.svg') no-repeat 0 center;
  }
  &__data-management {
    background: url('../assets/imgs/icons/data-management.svg') no-repeat 0
      center;
  }
  &__cloud-time {
    padding-left: 20px;
    background: url('../assets/imgs/icons/time.svg') no-repeat 0 center;
    background-size: 10px 10px;
  }
  &__cloud-plug {
    background: url('../assets/imgs/icons/plug.svg') no-repeat 0 center;
  }
  &__connect {
    background: url('../assets/imgs/icons/connect.svg') no-repeat 0 center;
  }
  &__cloud-manage {
    background: url('../assets/imgs/icons/manage.svg') no-repeat 0 center;
  }
  &__defense {
    background: url('../assets/imgs/icons/defense.svg') no-repeat 0 center;
  }
}

@media screen and (max-width: 680px) {
  .item-list {
    font-size: 14px;
  }
}
</style>
