export const getLocalFavouritesIds = () => {
  if (!localStorage.getItem("favourutesIds")) {
    localStorage.setItem("favourutesIds", "[]");
  }
  return JSON.parse(localStorage.getItem("favourutesIds") || "[]");
};

export const updateLocalFavouritesIds = (newIdsArray: number[]) => {
  localStorage.setItem("favourutesIds", JSON.stringify(newIdsArray));
};
