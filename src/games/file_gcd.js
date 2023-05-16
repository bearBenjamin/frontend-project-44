import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getCalculationGcd = (numA, numB) => {
  if (numA === 0) {
    return numB;
  }
  return getCalculationGcd(numB % numA, numA);
};

const generateRound = () => {
  const numA = getRandomNum(0, 100);
  const numB = getRandomNum(0, 100);
  const questionRound = `${numA}${' '}${numB}`;
  const expectedAnswer = String(getCalculationGcd(numA, numB));
  return [questionRound, expectedAnswer];
};

const gcd = () => {
  runEngine(rules, generateRound);
};

export default gcd;
