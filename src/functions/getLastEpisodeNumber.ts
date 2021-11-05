export const getLastEpisodeNumber = (episodeArray: string[]): number => {
  const lastEpisodeStr = episodeArray[episodeArray.length - 1];
  const lastSlashIndex = lastEpisodeStr.lastIndexOf("/");
  const lastEpisodeNumber = lastEpisodeStr.slice(lastSlashIndex + 1);
  return Number(lastEpisodeNumber);
};
