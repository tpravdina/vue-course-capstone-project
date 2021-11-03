import { createStore } from "vuex";
import {
  getAllCharacters,
  fetchCharactersByQuery,
  fetchMultipleCharacters,
} from "../services/CharacterService";
import {
  getLocalFavouritesIds,
  updateLocalFavouritesIds,
} from "../services/LocalStorage";
import { CharacterType } from "../types";

export default createStore({
  state: {
    characters: [],
    favouriteCharactersIds: getLocalFavouritesIds(),
  },
  mutations: {
    UPDATE_CHARACTERS(state, characters): void {
      state.characters = characters;
    },
    PUSH_FAVOURITE_CHARACTER_ID(state, id): void {
      state.favouriteCharactersIds.push(id);
      updateLocalFavouritesIds(state.favouriteCharactersIds);
    },
    DELETE_FAVOURITE_CHARACTER_ID(state, id): void {
      const index = state.favouriteCharactersIds.indexOf(id);
      state.favouriteCharactersIds = [
        ...state.favouriteCharactersIds.slice(0, index),
        ...state.favouriteCharactersIds.slice(index + 1),
      ];
      updateLocalFavouritesIds(state.favouriteCharactersIds);
    },
  },
  actions: {
    async fetchCharacters(ctx): Promise<void> {
      const characters = await getAllCharacters();
      ctx.commit("UPDATE_CHARACTERS", characters);
    },
    async getCharactersByQuery(ctx, queryString): Promise<void> {
      const characters = await fetchCharactersByQuery(queryString);
      ctx.commit("UPDATE_CHARACTERS", characters);
    },
    async getFavouriteCharacters(ctx, idArray): Promise<void> {
      return await fetchMultipleCharacters(idArray);
    },
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    favouriteCharactersIds(state) {
      return state.favouriteCharactersIds;
    },
    // рабочий геттер - не удалять!
    // favouriteCharacters(state) {
    //   return state.favouriteCharactersIds.map((id: number) =>
    //     state.characters.find((elem: CharacterType) => elem.id === id)
    //   );
    // },
    // favouriteCharacters(state) {
    //   return state.favouriteCharacters;
    // },
    isFavourite: (state) => (id: number) => {
      return state.favouriteCharactersIds.includes(id);
    },
    favouritesCount(state) {
      return state.favouriteCharactersIds.length;
    },
  },
});
