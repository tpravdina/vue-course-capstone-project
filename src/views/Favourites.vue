<template>
  {{ this.test }}
  <hr />
  ID
  {{ this.id }}
  <CharacterList :characters="favouriteCharacters" />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { mapGetters } from "vuex";
import CharacterList from "../components/CharacterList.vue";
import { getFavouriteCharacters } from "../services/CharacterService";
export default defineComponent({
  name: "Favourites",
  components: { CharacterList },
  data() {
    return {
      test: "test str",
    };
  },
  computed: {
    ...mapGetters(["favouriteCharacters", "favouriteCharactersIds"]),
    id: function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return this.favouriteCharactersIds;
    },
  },
  created() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    // watchEffect(async () => {
    //   this.test = await getFavouriteCharacters();
    // });
    // this.test = await getFavouriteCharacters();
    // console.log(this.favouriteCharactersIds);
    // console.log("Test", this.test);
  },
  // computed: mapGetters(["favouriteCharacters", "favouriteCharactersIds"]),
});
</script>

<style>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
