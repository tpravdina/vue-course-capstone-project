<template>
  <FilterBar />
  <CharacterList :characters="characters" />
  <Pagination :page="this.page" />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { mapGetters } from "vuex";
import CharacterList from "../components/CharacterList.vue";
import Pagination from "../components/Pagination.vue";
import FilterBar from "../components/FilterBar.vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Characters",
  props: ["page", "species"],
  components: { FilterBar, CharacterList, Pagination },
  computed: mapGetters(["characters"]),
  created() {
    watchEffect(() => {
      this.getCharactersByQuery(
        "?page=" + this.page + "&species=" + this.species
      );
    });
    // this.getFavouritesCharacters(); //!!!!!!!!!!!!!
  },
  methods: {
    ...mapActions(["getCharactersByQuery", "getFavouritesCharacters"]),
  },
});
</script>

<style>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
