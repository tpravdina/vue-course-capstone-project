import { createStore } from "vuex";
import { fetchCharactersByQuery } from "../services/CharacterService";
import {
  getLocalFavouritesIds,
  updateLocalFavouritesIds,
} from "../services/LocalStorage";
import { CharacterType } from "../types/CharacterType";

export default createStore({
  state: {
    characters: [] as CharacterType[],
    favouriteCharactersIds: getLocalFavouritesIds() as number[],
    totalPageNumber: 0 as number,
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
    addFavouriteCharacter(ctx, id): void {
      ctx.commit("PUSH_FAVOURITE_CHARACTER_ID", id);
    },
    deleteFavouriteCharacter(ctx, id): void {
      ctx.commit("DELETE_FAVOURITE_CHARACTER_ID", id);
    },
    async getCharactersByQuery(ctx, queryString): Promise<void> {
      const response = await fetchCharactersByQuery(queryString);
      ctx.commit("UPDATE_CHARACTERS", response.results);
      ctx.commit("UPDATE_TOTAL_PAGE_NUMBER", response.info.pages);
    },
  },
  getters: {
    characters(state): CharacterType[] {
      return state.characters;
    },
    totalPageNumber(state): number {
      return state.totalPageNumber;
    },
    favouriteCharactersIds(state): number[] {
      return state.favouriteCharactersIds;
    },
    isFavourite:
      (state) =>
      (id: number): boolean => {
        return state.favouriteCharactersIds.includes(id);
      },
    favouritesCount(state): number {
      return state.favouriteCharactersIds.length;
    },
  },
});
