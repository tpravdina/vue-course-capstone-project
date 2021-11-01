import { createStore } from "vuex";
import { getAllCharacters } from "../services/CharacterService";
export default createStore({
  state: {
    characters: [],
  },
  mutations: {
    UPDATE_CHARACTERS(state, characters): void {
      state.characters = characters;
    },
  },
  actions: {
    async fetchCharacters(ctx): Promise<void> {
      const characters = await getAllCharacters();
      ctx.commit("UPDATE_CHARACTERS", characters);
    },
  },
  getters: {
    characters(state) {
      return state.characters;
    },
  },
  modules: {},
});
