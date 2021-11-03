<template>
  <div class="navigation">
    <router-link to="/">Characters</router-link> |
    <router-link to="/favourites">Favourites</router-link>
    <div>Favourites count: {{ this.favouritesCount }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navigation",
  computed: mapGetters(["favouritesCount"]),
};
</script>

<style lang="scss">
// .navigation {
//   position: fixed;
//   top: 0;
//   width: 100%;
//   background: white;
// }
</style>
