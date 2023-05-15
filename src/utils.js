/* export const getRandomNum = () => {
  const bottonNum = 1;
  const topNum = 100;
  const min = Math.ceil(bottonNum);
  const max = Math.floor(topNum);
  const numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numRandom;
}; */

const getRandomNum = (min, max) => {
  const numRandom = Math.floor(min + Math.random() * (max - min + 1));
  return numRandom;
};

export default getRandomNum;

// list const

// export const exit = 'exit';
