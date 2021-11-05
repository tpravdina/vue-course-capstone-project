<template>
  <div class="CharacterDetails">
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
  </div>
</template>

<script lang="ts">
import CharacterCard from "../components/CharacterCard.vue";
import { getCharactersById } from "../services/CharacterService";
import { CharacterType } from "../types/CharacterType";

interface DataType {
  character: CharacterType;
  id: number;
}
export default {
  name: "CharacterDetails",
  components: { CharacterCard },
  data(): DataType {
    return {
      character: {} as CharacterType,
      id: 0 as number,
    };
  },
  async created(): Promise<void> {
    this.id = Number(this.$route.params.id);
    this.character = await getCharactersById(this.id);
  },
};
</script>
