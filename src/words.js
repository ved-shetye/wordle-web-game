export const words = [
  'APPLE', 'BANJO', 'CRANE', 'DRIVE', 'EAGLE', 'FLUTE', 'GRAPE', 'HOUSE', 'INDEX', 'JUMPY',
  'KITES', 'LARGE', 'MOUSE', 'NOBLE', 'OPERA', 'PLUMB', 'QUILT', 'ROBOT', 'STOVE', 'TRUCK',
  'UMBRE', 'VOTER', 'WHALE', 'XENON', 'YACHT', 'ZEBRA', 'ANIME', 'BEAST', 'CLOUD'
];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
