<template>
  <div class="no-massage" v-if="this.favouritesCount === 0">No cards</div>
  <CharacterList v-else :characters="this.favouriteCharacters" />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { mapGetters } from "vuex";
import CharacterList from "../components/CharacterList.vue";
import { getMultipleCharacters } from "../services/CharacterService";
import { CharacterType } from "../types/CharacterType";

export default defineComponent({
  name: "Favourites",
  components: { CharacterList },
  data() {
    return {
      favouriteCharacters: [] as CharacterType[],
    };
  },
  computed: {
    ...mapGetters(["favouriteCharactersIds", "favouritesCount"]),
  },
  created() {
    watchEffect(async () => {
      this.favouriteCharacters = await getMultipleCharacters(
        this.favouriteCharactersIds
      );
    });
  },
});
</script>
