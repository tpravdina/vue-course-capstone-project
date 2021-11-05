import { sortCharactersByIds } from "../functions/sortCharactersByIds";
import { CharacterType } from "../types";

export const fetchCharactersByQuery = async (queryString: string) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${queryString}`
  );
  return await res.json();
};

export const getCharactersById = async (id: number) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();
  return character;
};

export const getMultipleCharacters = async (
  queryArray: number[]
): Promise<CharacterType[]> => {
  if (queryArray.length === 1) {
    return [await getCharactersById(queryArray[0])];
  }
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${queryArray.join(",")}`
  );
  const characters = await res.json();
  const sortedCharacters = sortCharactersByIds(characters, queryArray);
  return sortedCharacters;
};
