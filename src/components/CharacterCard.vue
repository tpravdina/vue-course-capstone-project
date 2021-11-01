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
      <button @click.prevent="handleClick">Add to Favourites</button>
    </div>
  </div>
</template>

<script>
import { getFirstEpisodeNumber } from "../functions/getFirstEpisodeNumber";
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
  computed: {
    firstEpisodeNumber() {
      return getFirstEpisodeNumber(this.episode);
    },
  },
  methods: {
    handleClick(e) {
      e.stopPropagation();
      console.log("click");
    },
  },
};
</script>

<style lang="scss">
.CharacterCard {
  width: fit-content;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  &__img {
    max-width: 300px;
  }
  &__description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &--vertical {
    .CharacterCard__location,
    .CharacterCard__first-episode {
      display: none;
    }
  }
  &--horizontal {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    .CharacterCard__img {
      order: 2;
    }
    .CharacterCard__location,
    .CharacterCard__first-episode {
      display: block;
    }
  }
}
</style>
