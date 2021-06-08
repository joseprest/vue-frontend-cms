<template>
  <div class="tooltip">
    <slot></slot>
    <span class="tooltiptext">
      {{ tooltip }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tooltip: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  font-size: $size-7;
  visibility: hidden;
  width: 200px;
  background-color: rgba($blue-dark, 0.9);
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  font-weight: 400 !important;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -100px; /* Use half of the width, to center the tooltip */
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tooltip .tooltiptext::after {
  content: ' ';
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba($blue-dark, 0.9) transparent transparent transparent;
}
</style>
