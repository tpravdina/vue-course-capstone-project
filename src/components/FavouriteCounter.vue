<template>
  <div class="FavouriteCounter">
    <HeartIcon class="FavouriteCounter__heart" />
    <p class="FavouriteCounter__number">{{ this.favouritesCount }}</p>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import HeartIcon from "./HeartIcon.vue";

export default {
  name: "FavouriteCounter",
  components: { HeartIcon },
  computed: mapGetters(["favouritesCount"]),
};
</script>
