<template>
  <div v-if="this.favouritesCount === 0"><b>No cards</b></div>
  <CharacterList v-else :characters="this.favouriteCharacters" />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { mapActions, mapGetters } from "vuex";
import CharacterList from "../components/CharacterList.vue";
import { fetchMultipleCharacters } from "../services/CharacterService";
export default defineComponent({
  name: "Favourites",
  components: { CharacterList },
  data() {
    return {
      favouriteCharacters: [],
    };
  },
  computed: {
    ...mapGetters(["favouriteCharactersIds", "favouritesCount"]),
  },
  methods: {
    ...mapActions(["getFavouriteCharacters"]),
  },
  created() {
    watchEffect(async () => {
      this.favouriteCharacters = await fetchMultipleCharacters(
        this.favouriteCharactersIds
      );
    });
  },
});
</script>

<style>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
