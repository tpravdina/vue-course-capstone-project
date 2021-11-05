<template>
  <Navigation />
  <div class="RouterView"><router-view /></div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navigation },
};
</script>
