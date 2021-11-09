<template>
  <div class="Navigation">
    <router-link
      class="Navigation__link"
      active-class="Navigation__link--active"
      to="/index.html"
      >Characters</router-link
    >
    <router-link
      class="Navigation__link"
      active-class="Navigation__link--active"
      to="/favourites"
      >Favourites</router-link
    >
    <FavouriteCounter class="Navigation__favourite-count" />
  </div>
</template>

<script lang="ts">
import FavouriteCounter from "./FavouriteCounter.vue";

export default {
  name: "Navigation",
  components: { FavouriteCounter },
};
</script>
