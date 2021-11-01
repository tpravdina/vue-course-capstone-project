<template>
  <div class="about">
    {{ favouriteCharactersIds }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
// import CharacterCard from "../components/CharacterCard.vue";
export default defineComponent({
  name: "Favourites",
  // components: { CharacterCard },
  // async mounted() {
  // this.fetchCharacters();
  // },
  methods: {
    // ...mapActions(["fetchCharacters"]),
  },
  computed: mapGetters(["favouriteCharactersIds"]),
});
</script>
