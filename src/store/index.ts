import { createStore } from "vuex";
import { getAllCharacters } from "../services/CharacterService";
export default createStore({
  state: {
    characters: [],
    favouriteCharactersIds: [1, 2, 3],
  },
  mutations: {
    UPDATE_CHARACTERS(state, characters): void {
      state.characters = characters;
    },
    PUSH_FAVOURITE_CHARACTER_ID(state, id): void {
      state.favouriteCharactersIds.push(id);
    },
    DELETE_FAVOURITE_CHARACTER_ID(state, id): void {
      const index = state.favouriteCharactersIds.indexOf(id);
      state.favouriteCharactersIds = [
        ...state.favouriteCharactersIds.slice(0, index),
        ...state.favouriteCharactersIds.slice(index + 1),
      ];
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
    favouriteCharactersIds(state) {
      return state.favouriteCharactersIds;
    },
    favouriteCharacters(state) {
      return state.favouriteCharactersIds.map((id) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        state.characters.find((elem) => elem.id === id)
      );
    },
    isFavourite: (state) => (id: number) => {
      return state.favouriteCharactersIds.includes(id);
    },
    favouritesCount(state) {
      return state.favouriteCharactersIds.length;
    },
  },
});
