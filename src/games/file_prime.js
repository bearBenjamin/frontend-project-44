import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numRandom) => {
  if (numRandom < 2) {
    return false;
  }
  for (let i = 2; i <= numRandom / 2; i += 1) {
    if (numRandom % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const numRandom = getRandomNum(0, 100);
  const questionRound = `${numRandom}`;
  const expectedAnswer = isPrime(numRandom) ? 'yes' : 'no';
  return [questionRound, expectedAnswer];
};

const numPrime = () => {
  runEngine(rules, generateRound);
};

export default numPrime;
