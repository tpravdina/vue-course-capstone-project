<template>
  <CharacterCard
    v-for="character in characters"
    :key="character.id"
    :img="character.image"
    :name="character.name"
    :species="character.species"
    :status="character.status"
    :location="character.location.name"
    :episode="character.episode"
    orientation="vertical"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import CharacterCard from "../components/CharacterCard.vue";
export default defineComponent({
  name: "Characters",
  components: { CharacterCard },
  async mounted() {
    this.fetchCharacters();
    console.log(this.characters);
  },
  methods: {
    ...mapActions(["fetchCharacters"]),
    // handleClick() {
    //   this.$store.dispatch("fetchCharacters");
    // },
  },
  computed: mapGetters(["characters"]),
});
</script>
