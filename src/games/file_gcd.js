import runEngine from '../index.js';
import {
  getAnswerUser, showRoundQuestion,
  getRandomNum, getCalculationGcd,
} from '../utils.js';

const nameGame = 'brain-gcd\n';
const rules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const numA = getRandomNum();
  const numB = getRandomNum();
  const operationRound = ' ';
  showRoundQuestion(numA, operationRound, numB);
  const answerUser = +getAnswerUser();
  const expectResp = getCalculationGcd(numA, numB);
  return [answerUser, expectResp];
};

const gcd = () => {
  runEngine(nameGame, rules, generateRound);
};

export default gcd;
