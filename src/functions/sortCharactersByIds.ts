import { CharacterType } from "../types";

export const sortCharactersByIds = (
  charactersArray: CharacterType[],
  idsArray: number[]
) => {
  const charactersObject: any = {};
  charactersArray.forEach((elem) => (charactersObject[elem.id] = elem));

  const sortedCharactes = idsArray.map((id: number) => {
    return charactersObject[id];
  });
  return sortedCharactes;
};
