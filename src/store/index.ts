import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
  },
  mutations: {
    UPDATE_CHARACTERS(state, characters): void {
      state.characters = characters;
      console.log(state.characters);
    },
  },
  actions: {
    async fetchCharacters(ctx): Promise<void> {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const characters = await res.json();
      ctx.commit("UPDATE_CHARACTERS", characters.results);
    },
  },
  getters: {
    characters(state) {
      return state.characters;
    },
  },
  modules: {},
});
