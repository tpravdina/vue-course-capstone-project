<template>
  <router-link
    v-for="character in favouriteCharacters"
    :key="character.id"
    class="router-link"
    :to="{ name: 'CharacterDetails', params: { id: character.id } }"
  >
    <CharacterCard
      :id="character.id"
      :img="character.image"
      :name="character.name"
      :species="character.species"
      :status="character.status"
      :location="character.location.name"
      :episode="character.episode"
      orientation="vertical"
    />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import CharacterCard from "../components/CharacterCard.vue";
export default defineComponent({
  name: "Favourites",
  components: { CharacterCard },
  computed: mapGetters(["favouriteCharacters"]),
});
</script>

<style>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
