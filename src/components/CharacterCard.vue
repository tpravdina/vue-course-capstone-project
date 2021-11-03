<template>
  <div :class="`CharacterCard CharacterCard--${this.orientation}`">
    <img class="CharacterCard__img" :src="this.img" alt="" />
    <div class="CharacterCard__description">
      <!--  -->
      <div>{{ isFavourite(this.id) }}</div>
      <hr />
      <!--  -->
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
      <button @click.prevent="handleClick">
        <div v-if="!isFavourite(this.id)">Add to Favourites</div>
        <div v-else>Remove from Favourites</div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
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
    ...mapGetters(["isFavourite"]),
    firstEpisodeNumber() {
      return getFirstEpisodeNumber(this.episode);
    },
  },
  methods: {
    ...mapMutations(["PUSH_FAVOURITE_CHARACTER_ID"]),
    ...mapActions(["getFavouriteCaracters"]),
    handleClick(e) {
      e.stopPropagation();
      if (!this.isFavourite(this.id)) {
        this.$store.commit("PUSH_FAVOURITE_CHARACTER_ID", this.id);
        // this.$store.dispatch("")
      } else {
        this.$store.commit("DELETE_FAVOURITE_CHARACTER_ID", this.id);
      }
    },
  },
};
</script>

<style lang="scss">
.CharacterCard {
  // width: fit-content;
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
