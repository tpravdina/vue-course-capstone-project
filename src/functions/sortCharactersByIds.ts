import { CharacterType } from "../types/CharacterType";

interface Dictionary {
  [key: number]: CharacterType;
}

export const sortCharactersByIds = (
  charactersArray: CharacterType[],
  idsArray: number[]
): CharacterType[] => {
  const charactersDictionary = {} as Dictionary;
  charactersArray.forEach(
    (elem: CharacterType) => (charactersDictionary[elem.id] = elem)
  );

  const sortedCharactes = idsArray.map((id: number) => {
    return charactersDictionary[id];
  });
  return sortedCharactes;
};
