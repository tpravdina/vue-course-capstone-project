<template>
  <div class="filter-bar">
    <SpeciesFilter />
    <NameFilter />
  </div>
</template>

<script>
import SpeciesFilter from "./SpeciesFilter.vue";
import NameFilter from "./NameFilter.vue";
export default {
  name: "FilterBar",
  components: { SpeciesFilter, NameFilter },
};
</script>
