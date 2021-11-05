<template>
  <div class="navigation">
    <router-link to="/">Characters</router-link> |
    <router-link to="/favourites">Favourites</router-link>
    <div>Favourites count: {{ this.favouritesCount }}</div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
  name: "Navigation",
  computed: mapGetters(["favouritesCount"]),
};
</script>
