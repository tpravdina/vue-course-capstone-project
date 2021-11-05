<template>
  <Navigation />
  <div class="RouterView"><router-view /></div>
  <Button :onClick="handleClick"> Hello </Button>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Button from "./components/Button.vue";
export default {
  components: { Navigation, Button },
  methods: {
    handleClick() {
      alert("hello");
    },
  },
};
</script>
