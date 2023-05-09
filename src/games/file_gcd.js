import runEngine from '../index.js';
import { getRandomNum } from '../utils.js';

const nameGame = 'brain-gcd\n';
const rules = 'Find the greatest common divisor of given numbers.';
const getCalculationGcd = (numA, numB) => {
  let numOne = numA;
  let numTwo = numB;
  let gcdResult;
  if (numOne === numTwo) {
    gcdResult = numOne;
  } else {
    do {
      if (numOne > numTwo) {
        numOne -= numTwo;
      } else {
        numTwo -= numOne;
      }
    } while (numOne !== numTwo);
    gcdResult = numOne;
  }
  return gcdResult;
};

const generateRound = () => {
  const numA = getRandomNum();
  const numB = getRandomNum();
  const questionRound = `${'Question: '}${numA}${' '}${numB}`;
  const expectedAnswer = getCalculationGcd(numA, numB);
  console.log(expectedAnswer);
  return [questionRound, String(expectedAnswer)];
};

const gcd = () => {
  runEngine(nameGame, rules, generateRound);
};

export default gcd;
