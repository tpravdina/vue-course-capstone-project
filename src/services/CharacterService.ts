export const getAllCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();
  return characters.results;
};

import { getLocalFavouritesIds } from "./LocalStorage";
export const getFavouriteCharacters = async () => {
  if (getLocalFavouritesIds().length !== 0) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${getLocalFavouritesIds().join(
        ","
      )}`
    );
    const favouriteCharacters = await res.json();
    return favouriteCharacters;
  }
  return [];
};

export const fetchCharactersByQuery = async (queryString: string) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${queryString}`
  );
  return await res.json();
};

export const fetchMultipleCharacters = async (queryArray: number[]) => {
  if (queryArray.length === 1) {
    return [await getCharactersById(queryArray[0])];
  }
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${queryArray.join(",")}`
  );
  const characters = await res.json();
  return characters;
};

export const getCharactersById = async (id: number) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();
  return character;
};
