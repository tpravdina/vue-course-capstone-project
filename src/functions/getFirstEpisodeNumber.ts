export const getFirstEpisodeNumber = (episodeArray: string[]): number => {
  const firstEpisodeStr = episodeArray[0];
  const lastSlashIndex = firstEpisodeStr.lastIndexOf("/");
  const firstEpisodeNumber = firstEpisodeStr.slice(lastSlashIndex + 1);
  return Number(firstEpisodeNumber);
};
