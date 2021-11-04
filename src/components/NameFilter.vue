<template>
  <div class="name-filter-container">
    <input v-model="name" type="text" placeholder="Search by name..." />
    <router-link
      :to="{
        name: 'Characters',
        query: { ...this.$route.query, name: this.name },
      }"
      @click="handleClick"
      >Search</router-link
    >
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
});
</script>

<style lang="scss">
.name-filter-container {
  margin: 50px 0;
}
</style>
