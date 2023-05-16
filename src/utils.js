const getRandomNum = (min, max) => {
  const numRandom = Math.floor(min + Math.random() * (max - min + 1));
  return numRandom;
};

export default getRandomNum;
