export const words = [
  'APPLE', 'BANJO', 'CRANE', 'DRIVE', 'EAGLE', 'FLUTE', 'GRAPE', 'HOUSE', 'INDEX', 'JUMPY',
  'KNIFE', 'LARGE', 'MOUSE', 'NOBLE', 'OPERA', 'PLUMB', 'QUILT', 'ROBOT', 'STOVE', 'TRUCK',
  'SHINY', 'VOTER', 'WHALE', 'XENON', 'YACHT', 'ZEBRA', 'ANIME', 'BEAST', 'CLOUD', 'NIGHT',
  'FEAST', 'BINGE', 'BLACK', 'YEAST', 

];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
