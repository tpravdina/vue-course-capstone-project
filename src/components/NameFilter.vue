<template>
  <div class="name-filter-container">
    <input
      v-model="name"
      @keyup.enter="handleSearch"
      type="text"
      placeholder="Search by name..."
    />
    <button @click="handleSearch">Search</button>
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
    handleSearch() {
      this.$router.push({
        name: "Characters",
        query: { ...this.$route.query, name: this.name },
      });
    },
  },
});
</script>

<style lang="scss">
.name-filter-container {
  margin: 50px 0;
}
</style>
