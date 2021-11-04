<template>
  <div class="name-filter-container">
    <input v-model="name" type="text" placeholder="Search by name..." />
    <button @click="handleSearchClick">Search</button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "NameFilter",
  data: function () {
    return {
      name: "",
    };
  },
  methods: {
    handleSearchClick() {
      alert(this.name);
    },
  },
});
</script>

<style lang="scss">
.name-filter-container {
  margin: 50px 0;
}
</style>
