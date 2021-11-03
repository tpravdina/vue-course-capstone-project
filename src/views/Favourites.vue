<template>
  <CharacterList :characters="this.favouriteCharacters" />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { mapActions, mapGetters } from "vuex";
import CharacterList from "../components/CharacterList.vue";
export default defineComponent({
  name: "Favourites",
  components: { CharacterList },
  data() {
    return {
      favouriteCharacters: [],
    };
  },
  computed: {
    ...mapGetters(["favouriteCharactersIds"]),
  },
  methods: {
    ...mapActions(["getFavouriteCharacters"]),
  },
  async created() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.favouriteCharacters = await this.getFavouriteCharacters(
      this.favouriteCharactersIds
    );
  },
});
</script>

<style>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
