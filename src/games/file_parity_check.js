import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const parityCheck = (numRandom) => {
  const evenOrOdd = numRandom % 2 === 0;
  const expectedAnswer = evenOrOdd ? 'yes' : 'no';
  return expectedAnswer;
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const numRandom = getRandomNum(0, 100);
  const questionRound = `${numRandom}`;
  const expectedAnswer = parityCheck(numRandom);
  return [questionRound, expectedAnswer];
};

const arbitaryNumber = () => {
  runEngine(rules, generateRound);
};

export default arbitaryNumber;
