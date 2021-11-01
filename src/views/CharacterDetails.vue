<template>
  <CharacterCard
    :id="this.character.id"
    :img="this.character.image"
    :name="this.character.name"
    :species="this.character.species"
    :status="this.character.status"
    :location="this.character.location.name"
    :episode="this.character.episode"
    orientation="horizontal"
  />
</template>

<script>
import CharacterCard from "../components/CharacterCard.vue";
import { getCharactersById } from "../services/CharacterService";
export default {
  name: "CharacterDetails",
  components: { CharacterCard },
  data() {
    return {
      character: {},
      id: 0,
    };
  },
  async created() {
    this.id = this.$route.params.id;
    this.character = await getCharactersById(this.id);
  },
};
</script>
