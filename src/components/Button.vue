<template>
  <button class="Button" v-if="isNeedToPrevent" @click.prevent="this.onClick">
    <slot></slot>
  </button>
  <button class="Button" v-else @click="this.onClick">
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
