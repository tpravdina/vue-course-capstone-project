<template>
  <router-link
    v-for="character in characters"
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
import { mapGetters } from "vuex";
import CharacterCard from "../components/CharacterCard.vue";
export default defineComponent({
  name: "Characters",
  components: { CharacterCard },
  computed: mapGetters(["characters"]),
});
</script>

<style>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
