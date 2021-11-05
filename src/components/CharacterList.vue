<template>
  <div class="card-container">
    <router-link
      v-for="character in this.characters"
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CharacterCard from "./CharacterCard.vue";

export default defineComponent({
  name: "CharacterList",
  props: ["characters"],
  components: { CharacterCard },
});
</script>

<style lang="scss">
.card-container {
  border: 1px solid red;
  margin: 0 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
}
</style>
