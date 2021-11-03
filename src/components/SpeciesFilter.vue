<template>
  <div class="species-container">
    <router-link
      :to="{
        name: 'Characters',
        query: { ...this.$route.query, species: '', page: 1 },
      }"
      >All</router-link
    >
    <router-link
      :to="{
        name: 'Characters',
        query: { ...this.$route.query, species: 'Human', page: 1 },
      }"
      >Human</router-link
    >
    <router-link
      :to="{
        name: 'Characters',
        query: { ...this.$route.query, species: 'Animal', page: 1 },
      }"
      >Animal</router-link
    >
    <router-link
      :to="{
        name: 'Characters',
        query: { ...this.$route.query, species: 'Alien', page: 1 },
      }"
      >Alien</router-link
    >
  </div>
</template>

<style lang="scss">
.species-container {
  width: 40%; //
  margin-left: 100px; //
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
