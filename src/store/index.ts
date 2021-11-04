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
    totalPageNumber: 0,
  },
  mutations: {
    UPDATE_TOTAL_PAGE_NUMBER(state, totalPageNumber): void {
      state.totalPageNumber = totalPageNumber;
    },
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
    addFavouriteCharacter(ctx, id) {
      ctx.commit("PUSH_FAVOURITE_CHARACTER_ID", id);
    },
    deleteFavouriteCharacter(ctx, id) {
      ctx.commit("DELETE_FAVOURITE_CHARACTER_ID", id);
    },
    async fetchCharacters(ctx): Promise<void> {
      const characters = await getAllCharacters();
      ctx.commit("UPDATE_CHARACTERS", characters);
    },
    async getCharactersByQuery(ctx, queryString): Promise<void> {
      console.log("getCharactersByQuery");
      const response = await fetchCharactersByQuery(queryString);
      ctx.commit("UPDATE_CHARACTERS", response.results);
      ctx.commit("UPDATE_TOTAL_PAGE_NUMBER", response.info.pages);
    },
    async getFavouriteCharacters(
      ctx,
      idArray
    ): Promise<<CharacterType>() => []> {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return await fetchMultipleCharacters(idArray);
    },
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    totalPageNumber(state) {
      return state.totalPageNumber;
    },
    favouriteCharactersIds(state) {
      return state.favouriteCharactersIds;
    },
    isFavourite: (state) => (id: number) => {
      return state.favouriteCharactersIds.includes(id);
    },
    favouritesCount(state) {
      return state.favouriteCharactersIds.length;
    },
  },
});
