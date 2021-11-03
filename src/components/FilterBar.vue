<template>
  <div class="filter-bar">
    <SpeciesFilter />
  </div>
</template>

<script>
import SpeciesFilter from "./SpeciesFilter.vue";
export default {
  name: "FilterBar",
  components: { SpeciesFilter },
};
</script>

<style lang="scss">
// .filter-bar {
//   position: fixed;
//   top: 50px;
//   width: 100%;
//   background: white;
// }
</style>
