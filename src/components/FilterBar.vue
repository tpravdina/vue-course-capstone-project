<template>
  <div class="FilterBar">
    <SpeciesFilter />
    <NameFilter />
  </div>
</template>

<script lang="ts">
import SpeciesFilter from "./SpeciesFilter.vue";
import NameFilter from "./NameFilter.vue";

export default {
  name: "FilterBar",
  components: { SpeciesFilter, NameFilter },
};
</script>
