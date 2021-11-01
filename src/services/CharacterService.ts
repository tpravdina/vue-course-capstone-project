export const getAllCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();
  return characters.results;
};

export const getCharactersById = async (id: number) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();
  return character;
};
