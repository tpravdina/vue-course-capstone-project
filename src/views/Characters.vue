<template>
  <FilterBar />
  <NameFilter />
  <CharacterList :characters="characters" />
  <Pagination :page="this.page" :totalPageNumber="this.totalPageNumber" />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { mapGetters } from "vuex";
import CharacterList from "../components/CharacterList.vue";
import Pagination from "../components/Pagination.vue";
import FilterBar from "../components/FilterBar.vue";
import NameFilter from "../components/NameFilter.vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Characters",
  data() {
    return {
      totalPageNumber: 0,
    };
  },
  props: ["page", "species", "name"],
  components: { FilterBar, CharacterList, Pagination, NameFilter },
  computed: mapGetters(["characters"]),
  created() {
    watchEffect(() => {
      this.getCharactersByQuery(
        "?page=" + this.page + "&species=" + this.species + "&name=" + this.name
      );
    });
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
