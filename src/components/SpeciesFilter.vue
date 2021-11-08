<template>
  <div class="SpeciesFilter">
    <router-link
      :class="{
        'SpeciesFilter__router-link': true,
        'SpeciesFilter__router-link--active':
          speciesFilterItem.value === activeItem,
      }"
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
      @click="changeActiveItem(speciesFilterItem.value)"
    >
      <Button
        class="SpeciesFilter__button Button--outlined"
        :class="{
          'SpeciesFilter__button Button--outlined': true,
          active: speciesFilterItem.value === activeItem,
        }"
        >{{ speciesFilterItem.text }}</Button
      >
    </router-link>
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
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
      activeItem: "",
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
  components: { Button },
  methods: {
    changeActiveItem(newActiveItem: string): void {
      //@ts-ignore
      this.activeItem = newActiveItem;
    },
  },
};
</script>
