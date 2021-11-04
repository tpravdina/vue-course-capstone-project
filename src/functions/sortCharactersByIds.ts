import { CharacterType } from "../types";

export const sortCharactersByIds = (
  charactersArray: CharacterType[],
  idsArray: number[]
) => {
  const sortedCharactes = idsArray.map((id: number) => {
    return charactersArray.find((elem: CharacterType) => elem.id === id);
  });
  return sortedCharactes;
};
