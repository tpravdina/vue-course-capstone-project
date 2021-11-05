<template>
  <button v-if="isNeedToPrevent" @click.prevent="this.onClick">
    <slot></slot>
  </button>
  <button v-else @click="this.onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: Object,
    isNeedToPrevent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
