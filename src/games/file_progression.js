import runEngine from '../index.js';
import { getRandomNum } from '../utils.js';

const nameGame = 'brain-progression\n';
const rules = 'What number is missing in the progression?';
const getArrayProgressionRound = (numRandom) => {
  const arrayProgression = [];
  let itemArrayProgression = numRandom;
  for (let j = 0; j < 10; j += 1) {
    itemArrayProgression += 2;
    arrayProgression.push(itemArrayProgression);
  }
  return arrayProgression;
};

const generateRound = () => {
  const numRandom = getRandomNum();
  const arrayProgression = getArrayProgressionRound(numRandom);
  const itemTwoPoint = Math.floor(Math.random() * arrayProgression.length);
  const expectedAnswer = arrayProgression[itemTwoPoint];
  arrayProgression[itemTwoPoint] = '..';
  const strProgression = arrayProgression.join(' ');
  const questionRound = `${'Question: '}${strProgression}`;
  return [questionRound, String(expectedAnswer)];
};

const progression = () => {
  runEngine(nameGame, rules, generateRound);
};

export default progression;
