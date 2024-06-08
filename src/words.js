export const words = [
  'APPLE', 'BANJO', 'CRANE', 'DRIVE', 'EAGLE', 'FLUTE', 'GRAPE', 'HOUSE', 'INDEX', 'JUMPY',
  'KNIFE', 'LARGE', 'MOUSE', 'NOBLE', 'OPERA', 'PLUMB', 'QUILT', 'ROBOT', 'STOVE', 'TRUCK',
  'SHINY', 'VOTER', 'WHALE', 'XENON', 'YACHT', 'ZEBRA', 'ANIME', 'BEAST', 'CLOUD', 'NIGHT',
  'FEAST', 'BINGE', 'BLACK', 'YEAST', 'BLAST', 'BRAVE', 'CHESS', 'CIVIL', 'DAISY', 'EARTH',
  'FLEET', 'GLASS', 'GLOBE', 'GUARD', 'HABIT', 'IMAGE', 'JOLLY', 'KNOCK', 'LEMON', 'MAGIC',
  'NURSE', 'OASIS', 'PANEL', 'QUEST', 'RADIO', 'SHARK', 'TOWER', 'ULTRA', 'VIVID', 'WHISK',
  'XYLEM', 'YOUNG', 'ZESTY', 'ARROW', 'BLOOM', 'CAMEL', 'DOUBT', 'ELITE', 'FROST', 'GUILD',
  'HONEY', 'ISSUE', 'JUICE', 'KRAUT', 'LOGIC', 'MIRTH', 'NOVEL', 'ORBIT', 'PLANT', 'QUARK',
  'RIVER', 'SCOPE', 'TRADE', 'UNITY', 'VALVE', 'WOVEN', 'XENIA', 'YAWNS', 'ZONAL'
];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
