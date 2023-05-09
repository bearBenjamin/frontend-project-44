import runEngine from '../index.js';
import { getRandomNum } from '../utils.js';

const nameGame = 'brain-even\n';
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const numRandom = getRandomNum();
  const questionRound = `${'Question: '}${numRandom}`;
  const evenOrOdd = numRandom % 2 === 0;
  const expectedAnswer = evenOrOdd ? 'yes' : 'no';
  return [questionRound, expectedAnswer];
};

const arbitaryNumber = () => {
  runEngine(nameGame, rules, generateRound);
};

export default arbitaryNumber;
