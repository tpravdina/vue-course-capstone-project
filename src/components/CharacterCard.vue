<template>
  <div :class="`CharacterCard CharacterCard--${this.orientation}`">
    <img class="CharacterCard__img" :src="this.img" alt="" />
    <div class="CharacterCard__description">
      <div class="CharacterCard__name">{{ this.name }}</div>
      <div class="CharacterCard__species-status">
        {{ this.species }}-{{ this.status }}
      </div>
      <div class="CharacterCard__location">
        Last known location: {{ this.location }}
      </div>
      <div class="CharacterCard__first-episode">
        First seen in: {{ this.firstEpisodeNumber }} episode
      </div>
      <Button :onClick="handleClick" isNeedToPrevent="true">
        {{
          !isFavourite(this.id) ? "Add to Favourites" : "Remove from Favourites"
        }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { getFirstEpisodeNumber } from "../functions/getFirstEpisodeNumber";
import Button from "./Button.vue";
export default {
  name: "CharacterCard",
  props: [
    "id",
    "img",
    "name",
    "species",
    "status",
    "orientation",
    "location",
    "episode",
  ],
  components: { Button },
  computed: {
    ...mapGetters(["isFavourite"]),
    firstEpisodeNumber(): number {
      return getFirstEpisodeNumber(this.episode);
    },
  },
  methods: {
    ...mapActions(["addFavouriteCharacter", "deleteFavouriteCharacter"]),
    handleClick(): void {
      if (!this.isFavourite(this.id)) {
        this.addFavouriteCharacter(this.id);
      } else {
        this.deleteFavouriteCharacter(this.id);
      }
    },
  },
};
</script>
