import runEngine from '../index.js';
import { getRandomNum } from '../utils.js';

const nameGame = 'brain-prime\n';
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const numRandom = getRandomNum();
  const questionRound = `${'Question: '}${numRandom}`;
  let expectedAnswer = numRandom === 1 ? 'no' : 'yes';
  expectedAnswer = numRandom === 2 || numRandom === 3 ? 'yes' : 'no';
  const halfNumRandom = Math.floor(numRandom / 2);
  for (let j = 2; j <= halfNumRandom; j += 1) {
    if (numRandom % j === 0) {
      expectedAnswer = 'no';
      break;
    } else if (j === halfNumRandom) {
      expectedAnswer = 'yes';
    }
  }
  return [questionRound, expectedAnswer];
};

const numPr = () => {
  runEngine(nameGame, rules, generateRound);
};

export default numPr;
