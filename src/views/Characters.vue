<template>
  <FilterBar />
  <CharacterList v-if="characters" :characters="characters" />
  <Pagination
    v-if="characters"
    :page="this.page"
    :totalPageNumber="this.totalPageNumber"
  />
  <div v-else>No characters found.</div>
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
  props: ["page", "species", "name"],
  components: { CharacterList, Pagination, FilterBar },
  computed: {
    ...mapGetters(["characters", "totalPageNumber"]),
  },
  created() {
    watchEffect(() => {
      this.getCharactersByQuery(
        "?page=" + this.page + "&species=" + this.species + "&name=" + this.name
      );
    });
  },
  methods: {
    ...mapActions(["getCharactersByQuery"]),
  },
});
</script>
