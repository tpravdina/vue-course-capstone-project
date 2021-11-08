<template>
  <div class="NameFilter">
    <input
      class="NameFilter__input"
      v-model="name"
      @blur="handleSearch"
      @keyup.enter="handleSearch"
      type="text"
      placeholder="Search by name..."
    />
    <Button class="Button--outlined NameFilter__button" :onClick="handleSearch">
      Search
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Button from "./Button.vue";
export default defineComponent({
  name: "NameFilter",
  data() {
    return {
      name: "",
    };
  },
  components: {
    Button,
  },
  methods: {
    handleSearch(): void {
      this.$router.push({
        name: "Characters",
        query: {
          ...this.$route.query,
          name: this.name,
        },
      });
    },
  },
});
</script>
