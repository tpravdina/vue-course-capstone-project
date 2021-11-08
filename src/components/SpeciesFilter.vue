<template>
  <div class="species-container">
    <router-link
      v-for="speciesFilterItem in speciesFilterItems"
      :key="speciesFilterItem.text"
      :to="{
        name: 'Characters',
        query: {
          ...this.$route.query,
          species: speciesFilterItem.value,
          page: 1,
        },
      }"
      :class="{ active: speciesFilterItem.text === activeItem, link: true }"
      @click="changeActiveItem(speciesFilterItem.text)"
      >{{ speciesFilterItem.text }}</router-link
    >
  </div>
</template>

<script lang="ts">
interface DataType {
  activeItem: string;
  speciesFilterItems: {
    text: string;
    value: string;
  }[];
}
export default {
  data(): DataType {
    return {
      activeItem: "All",
      speciesFilterItems: [
        {
          text: "All",
          value: "",
        },
        {
          text: "Human",
          value: "Human",
        },
        {
          text: "Animal",
          value: "Animal",
        },
        {
          text: "Alien",
          value: "Alien",
        },
      ],
    };
  },
  methods: {
    changeActiveItem(newActiveItem: string): void {
      //@ts-ignore
      this.activeItem = newActiveItem;
    },
  },
};
</script>

<style lang="scss">
.species-container {
  width: 20%; //
  margin-left: 100px; //
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}
.link {
  text-decoration: none;
  background-color: darksalmon;
}
.active {
  color: white;
  background-color: black;
}
</style>
