export const getLocalFavouritesIds = (): number[] => {
  if (!localStorage.getItem("favourutesIds")) {
    localStorage.setItem("favourutesIds", "[]");
  }
  return JSON.parse(localStorage.getItem("favourutesIds") || "[]");
};

export const updateLocalFavouritesIds = (newIdsArray: number[]): void => {
  localStorage.setItem("favourutesIds", JSON.stringify(newIdsArray));
};
